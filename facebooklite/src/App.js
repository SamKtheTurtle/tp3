import React, { Component } from 'react';
import Nav from './Component/Nav';

import Profil from './Container/Profil';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>

        <Profil 
        auteur={{
          nom: "Nom",
          prenom: "Prenom",
          date: "Date",
        }}
        image="http://bpic.588ku.com/element_origin_min_pic/17/09/19/b84fa5d0a9f9b02c055d2a5ec610d7cf.jpg"
        />
     </div>
      
    );
  }
}

export default App;