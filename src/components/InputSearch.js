import React, { Component } from 'react';

class InputSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue : "" // équivalent du placeholder
    };
  }

  // met à jour le state et stocke, gère la valeur de l'input
  handleChange=(e)=>{
  this.setState({
    inputValue : e.target.value
  });
  }
  // console.log(e.target.value);
  // this.props.func(e.target.value); // on stocke la valeur insérée dans la func

  // met à jour le state parent
  handleClick=(e)=>{
    e.preventDefault();
    this.props.func(this.state.inputValue)
    this.setState({
      inputValue : ""
    });
  }


  render() {
    return (
      <div className="InputSearch">
        <form>
          <input type="text" onChange={this.handleChange} value={this.state.inputValue} placeholder="Number"/>
          <button onClick={this.handleClick}>GO !</button>
        </form>
      </div>
    );
  }

}

export default InputSearch;
