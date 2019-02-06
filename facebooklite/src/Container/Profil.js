import React, {Component} from 'react';
import Image from '../Component/Image';
import './Profil.css';

export default class Profil extends Component{
    constructor(props){
        super(props);
        this.state = {
              color:  '#282c34',
              nom:  'CADDEO',
              prenom:  'Sam',
              date:  '26/12/1996',
              image: 'http://al-taiclub.com/images/businessman-iphone-clipart-3.png',
              post: 'Sushi Forever',
              like: 0
        };
        this.randomColor = this.randomColor.bind(this);
        this.likeCounter = this.likeCounter.bind(this);
  }
  randomColor(){
    var letters = '0123456789ABCDEF';
    var colory = '#';
    for (var i = 0; i < 6; i++ ) {
        colory += letters[Math.floor(Math.random() * 16)];
    }
    this.setState({color: colory});    
    }

  likeCounter(){
    if(this.state.nom === 'CADDEO'){
        var counterZero = this.state.like +1;
        this.setState({like: counterZero});
      }
      if(this.state.nom === 'PRAT'){
        var counterOne = this.state.like +1;
        this.setState({like: counterOne});
      }
      if(this.state.nom === 'EPAULARD'){
        var counterTwo = this.state.like +1;
        this.setState({like: counterTwo});
      }
  }  
    render(){
        return(
        <div className="Page">
            <div className="buttonNav">
                <button  
              className="button button1" 
              onClick={() => this.setState({prenom: 'Sam', nom: 'CADDEO', date: '26/12/1996', image: 'http://al-taiclub.com/images/businessman-iphone-clipart-3.png', post: 'Sushi Forever', like: 0})}
              >
              Sam
              </button>

              <button  
              className="button button2" 
              onClick={() => this.setState({prenom: 'Arthur', nom: 'PRAT', date: '06/07/1997', image: 'https://lemonlearning.fr/wp-content/uploads/2017/05/boss.png', post: 'Team Pizza', like: 0})}
              >
             Arthur
              </button>

              <button  
              className="button button3" 
              onClick={() => this.setState({prenom: 'Alannah', nom: 'EPAULARD', date: '17/06/1996', image: 'http://designstemplates.in/atozinandhra/images/icons/login.png', post: 'Veganism is Life',like: 0})}
              >
              Alannah
              </button>
            </div>
        
            <div className="Menu" style={{background: this.state.color}} >            
            <div className="Info">
              <p>{this.state.nom}</p>
              <p>{this.state.prenom}</p>
              <p>{this.state.date}</p>
              <Image image = {this.state.image}/>
          </div>
            
            <button className="buttonChange" onClick={(this.randomColor)}>Changer le style !</button> 
        </div>

        <div className="Post" style={{background: this.state.color}} >  
        <p>{this.state.post}</p>
        <button className="buttonLike" onClick={(this.randomColor, this.likeCounter)}>{this.state.like} Super ! </button> 
        </div>   
        </div>  
        
        );
    }
}