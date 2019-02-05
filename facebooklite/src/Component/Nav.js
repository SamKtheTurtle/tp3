import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div classname="buttonNav">
              <button  
              className="button button1" 
              >
              Sam
              </button>

              <button  
              className="button button2" 
              >
              Alannah
              </button>

              <button  
              className="button button3" 
              >
              Arthur
              </button>
            </div>
        );
      }
}