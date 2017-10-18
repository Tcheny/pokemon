import React, { Component } from 'react';
import pokedex from '../assets/pokedex.png';
import '../stylesheets/App.css';

import Display from './Display';
import InputSearch from './InputSearch';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to my Pokedex</h1>
        </header>
        <Display />
        <InputSearch />
      </div>
    );
  }
}

export default App;
