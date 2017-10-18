import React, { Component } from 'react';

class PokeCard extends Component {

  render() {
    return (
      <div className="Pokecard">
        <h3>{this.props.name}</h3>
        {/* <img src={this.props.front} alt="pokemon front"/>
        <img src={this.props.back} alt="pokemon back"/> */}
      </div>
    );
  }

}

export default PokeCard;
