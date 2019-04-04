import React, { Component } from "react";
import FlagCard from "./components/FlagCard";
import Wrapper from "./components/Wrapper";
import flags from "../src/flags.json";

class App extends Component {
  state = {
    flags,
    score: 0
  };

  // Function to randomize cards that are being shown
  // randomCard = id => {
  //   const flags = this.state.flags;
  //     this.setState({flags});
  // };

  // Function to show a card has been clicked
  handleClick = clickedCard => {
    if (!clickedCard.state.isClicked) {
      clickedCard.setState({ isClicked: true });
      this.handleScore();
    } else {
      this.gameReset();
    }
  };

  handleScore = () => {
    this.setState({ score: this.state.score + 1 });
  };

  gameReset = () => {
    console.log("Game over");
    this.setState({ score: 0 });
  }


  // Render function 
  render() {
    return (
      <Wrapper>
        <h2 className="title">World Flag Memory Game</h2>
        <h4 className="score">{this.state.score}</h4>
        <div className="container">
          {this.state.flags.map((flag) => (
            <FlagCard
              handleClick = {this.handleClick}
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
