import React, { Component } from 'react';

class PokeCard extends Component {

  render() {
    return (
      <div className="Pokecard">
        <div className="pokeName">
          <h3>{this.props.name}</h3>
          {
            this.props.weight && <p>weight : {this.props.weight} height : {this.props.height}</p>
          }
        </div>
        <div className="pokeImg">
          <img src={this.props.front} alt=""/>
          <img src={this.props.back} alt=""/>
        </div>
      </div>
    );
  }
}

export default PokeCard;
