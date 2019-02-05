import React, { Component } from 'react';
import Profil from '../Container/Profil';

export default class Pone extends Component {
  render() {
    return (
      <div>
        <Profil 
        auteur={{
          nom: "Epaulard",
          prenom: "Alannah",
          date: "15/09/1997",
        }}
        image="http://bpic.588ku.com/element_origin_min_pic/17/09/19/b84fa5d0a9f9b02c055d2a5ec610d7cf.jpg"
        />
     </div>
      
    );
  }
}