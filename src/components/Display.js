import React, { Component } from 'react';
import request from 'request';

import PokeCard from './PokeCard';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : ""
    };
  }

  componentWillReceiveProps(nextProps) {
    request(`https://pokeapi.co/api/v2/pokemon/${nextProps.num}`, (err, res, body)=>{
      if(err) res.redirect('http://localhost:3000')
      this.setState({
        data : JSON.parse(body)
      });
    })
  }

  render() {
    return (
      <div className="DisplayImg">
        <PokeCard
          name={this.state.data.name}
          weight={this.state.data.weight}
          height={this.state.data.height}
          front={this.state.data && this.state.data.sprites.front_default}
          back={this.state.data && this.state.data.sprites.back_default}
        />
      </div>
    );
  }

}

export default Display;
