import React, { Component } from 'react';
import pokedex from '../assets/pokedex.gif';

class Display extends Component {

  render() {
    return (
      <div>
        <img src={pokedex} alt="pokedex"/>
      </div>
    );
  }

}

export default Display;
