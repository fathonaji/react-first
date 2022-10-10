import React, { Component } from "react";

class ClassComponent extends Component{
  state = {
     counter: 0
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render(){
     return <button onClick={ClassComponent.handleClick}>
      {this.props.text} {this.state.counter} 
     </button>
  }
}

export default ClassComponent