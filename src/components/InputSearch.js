import React, { Component } from 'react';

class InputSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue : "" // équivalent du placeholder
    };
  }

  // maj le state et stocke, gère la valeur de l'input
  handleChange=(e)=>{
  this.setState({
    inputValue : e.target.value
  });
  }
  // console.log(e.target.value);
  // this.props.func(e.target.value); // on stocke la valeur insérée dans la func

  // maj du state parent
  handleClick=(e)=>{
    e.preventDefault();
    this.props.func(this.state.inputValue)
    this.setState({
      inputValue : ""
    });
  }


  render() {
    return (
      <form className="InputSearch">
        <input type="text" onChange={this.handleChange} value={this.state.inputValue} placeholder="entrez un numero"/>
        <button onClick={this.handleClick}>GO !</button>
      </form>
    );
  }

}

export default InputSearch;
