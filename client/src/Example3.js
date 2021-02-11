import React, { Component } from 'react';
import data from "./data/results"; 

class Example3 extends Component {
	render() {
		return (
            <div>
                {
                  data.issues.map((skill) => {
                    return (
                      <div>
                        <h4>{skill.code}</h4>
                        <ul>
                            <p>Hello</p>
                            <li>{skill.type}</li>
                            <li>{skill.typeCode}</li>
                            <li>{skill.message}</li>
                            <li>{skill.context}</li>
                            <li>{skill.selector}</li>
                        </ul>
                      </div>
                    );
                  })
                } 
            </div>
        );
    }
} 
export default Example3;
