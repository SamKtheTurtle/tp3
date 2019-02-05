import React, {Component} from 'react';
import Auteur from '../Component/Auteur';
import Image from '../Component/Image';
import './Profil.css';

export default class Profil extends Component{
    constructor(props){
        super(props);
        this.state = {
              color:  '#282c34'
        };
        this.randomColor = this.randomColor.bind(this);
  }
  randomColor(){
    var letters = '0123456789ABCDEF';
    var colory = '#';
    for (var i = 0; i < 6; i++ ) {
        colory += letters[Math.floor(Math.random() * 16)];
    }
    this.setState({color: colory});    
    }
    render(){
        return(
        <div className="Menu" style={{background: this.state.color}} >            
            <Auteur auteur = {this.props.auteur}/>
            <Image image = {this.props.image}/>
            <button className="buttonChange" onClick={(this.randomColor)}>{this.state.color}</button> 
        </div>       
        );
    }
}
/*


constructor(props){
    super(props)
    this.state ={
      button: true
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({
      button:!this.state.button
    })
  }
  render(){
    return (
    <div className="container">
      <button className={this.state.button ? "buttonTrue": "buttonFalse"} onClick={this.handleClick}>Click Me!</button>  
    </div>
    )
  }
  
}*/