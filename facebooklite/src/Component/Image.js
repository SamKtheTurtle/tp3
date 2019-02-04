import React, { Component } from 'react';

export default class Image extends Component{
    render() {
        return (
          <img className="pp" src={this.props.image} alt="profilpic"/>
        );
      }
}