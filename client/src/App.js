import React, { Component } from 'react';
import './App.css';
import './result.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import JSONPretty from 'react-json-pretty';

class App extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
      responseToPost: ""
    }
  }

  componentDidMount() {
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    console.log(this.state);
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.url }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };

  changeStyles() {
    [...document.getElementsByClassName("__json-string__")].forEach((ele) => {
      if (ele.innerText === `"error"`) {
        console.log(ele.innerText);
        ele.classList.add("red");
      } 
      if (ele.innerText === `"notice"`) {
        console.log(ele.innerText);
        ele.classList.add("orange");
      } 

      if (ele.innerText === `"warning"`) {
        console.log(ele.innerText);
        ele.classList.add("blue");
      } 
    })
  }

  changeStyles2() {
    [...document.getElementsByClassName("__json-key__")].forEach((ele) => {
      if (ele.innerText === `"documentTitle"`) {
        console.log(ele.innerText);
        ele.classList.add("red");
      } 
    })
  }

  componentDidUpdate() {
    this.changeStyles();
    this.changeStyles2();
  }

  render() {
    return (
      <div className="App">
        <div className="text-center" style={{backgroundColor: "black", padding: "2em"}}>
            <h1 style={{color: "white", fontFamily: "Playfair Display SC"}}>Web Accessibility Test</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <form onSubmit={this.handleSubmit}>
                <br/>
                <p>
                  <strong>Enter URL:</strong>
                </p>
                <input className="form-control" type="url" onChange={event => this.setState({url:event.target.value})}/>
                <br/>
                <button className="btn btn-primary" type="submit">Submit</button>
                <button className="ml-3 btn btn-primary" type="button" onClick={(e) => this.setState({responseToPost: ""})}>Clear</button>
              </form>
              <br/>
              <JSONPretty id="json-pretty" data={this.state.responseToPost} keyStyle="font-weight: bold; color:#800080" valueStyle="color:#a6e22e;"></JSONPretty>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
