import React, { Component } from 'react';
import '../stylesheets/App.css';

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
          <h1>Welcome to my Pokedex</h1>
        </header>
        <InputSearch func={this.inputNumPokemon} />
        <Display num={this.state.pokemon}/>
      </div>
    );
  }
}

export default App;
