import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './temp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data/test.json';

const newdata = data.map((data) => {
    return(
      <div style={{paddingBottom: "1em"}}>
        <div className={'result ' + data.type}>
          <h2>{data.type} : {data.message}</h2>
          <p>{data.code}</p>
          <pre>{data.context}</pre>
        </div>
      </div>
    );

});

class RenderErr extends React.Component {
  render(){
    return(
      <div>
        {newdata}
      </div>

    )
  }

}

class Textpage extends React.Component {
  render() {
    return (
      <div>
        <newdata />
        <h4 style={{paddingTop: "2em", fontFamily: "Playfair Display SC", fontSize: "xx-large"}}>What is Web Accessibility?</h4>
        <h5 style={{paddingTop: "1em", paddingBottom: "1em", fontFamily: "Playfair Display", fontSize: "x-large"}}>Web accessibility testing is a subset of usability testing where the users under consideration have disabilities 
                    that affect how they use the web. The end goal, in both usability and accessibility, is to discover how easily people 
                    can use a web site and feed that information back into improving future designs and implementations.</h5>
      </div>
    );
  }
}

class MyForm extends React.Component {
  render() {
    return (
      <div>
        <div className="text-center" style={{backgroundColor: "black", padding: "2em"}}>
            <h1 style={{color: "white", fontFamily: "Playfair Display SC"}}>Web Accessibility Test</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
                <form action="http://localhost:8080/example" method="POST">
                    <div className="form-group">
                      <br/>
                      <label>Enter URL</label>
                      <input type="url" className="form-control" name="InputLabelURL" id="InputLabelURL" aria-describedby="InputLabelURL" placeholder="Enter URL here... (https://example.com)" />
                      <br/>
                      <input className="btn btn-primary" type='submit' />
                    </div>
                </form>
                <Textpage/>
                <RenderErr/>                       
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function App() {
  return (
    <MyForm/>
  );
}
ReactDOM.render(<MyForm />, document.getElementById('root'));
export default App;
