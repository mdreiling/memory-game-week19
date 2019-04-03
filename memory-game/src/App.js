import React, { Component } from "react";
import FlagCard from "./components/FlagCard";
import Wrapper from "./components/Wrapper";
import flags from "../src/flags.json";

class App extends Component {
  state = {
    flags,
    isClicked: false
  };

  // Function to randomize cards that are being shown
  // randomCard = id => {
  //   const flags = this.state.flags;
  //     this.setState({flags});
  // };

  // Function to show a card has been clicked
  handleClick = id => {
    this.setState({ isClicked: true});
    console.log(this.state.isClicked);
  };


  // Render function 
  render() {
    return (
      <Wrapper>
        <h2 className="title">World Country Flag Memory Game</h2>
        <div className="container">
          {this.state.flags.map(flag => (
            <FlagCard
              handleClick={this.handleClick}
              isClicked = {this.isClicked}
              id = {flag.id}
              key = {flag.id}
              name = {flag.name}
              image = {flag.image}
            />
          ))}
        </div>
      </Wrapper>
    )
  }
}

export default App;
