import React, { Component } from 'react';

export default class Auteur extends Component{
    render() {
        return (
          <div>
              <p>{this.props.auteur.nom}</p>
              <p>{this.props.auteur.prenom}</p>
              <p>{this.props.auteur.date}</p>
          </div>
        );
      }
}