import React, { Component } from "react";
import FlagCard from "./components/FlagCard";
import Wrapper from "./components/Wrapper";
import flags from "../src/flags.json";

class App extends Component {
  state = {
    flags
  };

  // Function to randomize cards that are being shown
  // randomCard = id => {
  //   const flags = this.state.flags;
  //     this.setState({flags});
  // };

  // Function to show a card has been clicked


  // Render function 
  render() {
    return (
      <Wrapper>
        <h1 className="title">European Country Flags</h1>
        <div className="container">
          {this.state.flags.map(flag => (
            <FlagCard
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
