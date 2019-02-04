import React, {Component} from 'react';
import Auteur from '../Component/Auteur';
import Image from '../Component/Image';
import ButtonChange from '../Component/ButtonChange';

export default class Profil extends Component{
    render(){
        return(
        <div>            
            <Auteur auteur = {this.props.auteur}/>
            <Image image = {this.props.image}/>
            <ButtonChange/>
        </div>       
        );
    }
}