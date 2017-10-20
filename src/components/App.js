import React, { Component } from 'react';
import '../stylesheets/App.css';
import logo from '../assets/Pokemon_logo.png';
import pokedex from '../assets/pokedex.png';

import Display from './Display';
import InputSearch from './InputSearch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon : ''
    };
  }

  inputNumPokemon = (num) => {
    this.setState({
      pokemon : num
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} alt="logo"/>
        </header>
        <div className="pokedex">
          <img src={pokedex} alt="pokedex"/>
          <InputSearch func={this.inputNumPokemon} />
          <Display num={this.state.pokemon}/>
        </div>
      </div>
    );
  }
}

export default App;
