import React, { Component } from 'react';
import request from 'request';

import pokedex from '../assets/pokedex.png';
import PokeCard from './PokeCard';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : ""
    };
  }

  componentWillReceiveProps(nextProps) {
    request(`https://pokeapi.co/api/v2/pokemon-form/${nextProps.num}`, (err, res, body)=>{
      this.setState({
        data : JSON.parse(body)
      });
      console.log(this.state.data);
    })
  }

  render() {
    return (
      <div className="DisplayImg">
        <img className="pokedex" src={pokedex} alt="pokedex"/>
        <PokeCard
          name={this.state.data.name}
          // front={this.state.data.sprites.front_default}
          // back={this.state.data.sprites.back_default}
        />
      </div>
    );
  }

}

export default Display;
