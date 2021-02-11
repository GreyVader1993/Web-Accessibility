import React, { Component } from 'react';
import './App.css';
import './result.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Example3 from './Example3';

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    // console.dir(response);
    const body = await response.text();
    console.log(body);

    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <div className="App">
        <div className="text-center" style={{backgroundColor: "black", padding: "2em"}}>
            <h1 style={{color: "white", fontFamily: "Playfair Display SC"}}>Web Accessibility Test</h1>
        </div>
        {/* <p>{this.state.response}</p> */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <form onSubmit={this.handleSubmit}>
                <br/>
                <p>
                  <strong>Enter URL:</strong>
                </p>
                <input className="form-control"
                  type="url"
                  value={this.state.post}
                  onChange={e => this.setState({ post: e.target.value })}
                />
                <br/>
                <button className="btn btn-primary" type="submit">Submit</button>
              </form>
              <br/>
              <p>{this.state.responseToPost}</p>
              <Example3/>
              <newdata/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
