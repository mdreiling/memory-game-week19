import React, { Component } from "react";
import FlagCard from "./components/FlagCard";
import Wrapper from "./components/Wrapper";
import flags from "../src/flags.json";

const allFlags = flags;

class App extends Component {
  state = {
    allFlags,
    score: 0,
    selectedFlags: []
  };

  // Function to randomize cards that are being shown
  randomFlag = allFlags => {
    // console.log(allFlags);
    for (var i = 0; i < 16; i++) {
        this.state.selectedFlags.push(allFlags[Math.floor(Math.random()*allFlags.length)]);
    }
    console.log(this.state.selectedFlags);
  };

  // Function to show a card has been clicked
  handleClick = clickedCard => {
    // console.log(clickedCard);
    if (!clickedCard.isClicked) {
      // clickedCard.isClicked = true;
      console.log(clickedCard.isClicked);
      this.handleScore();
    } else {
      this.gameReset();
    }
  };

  // Function to update the score when a previously unclicked flag is clicked
  handleScore = () => {
    this.setState({ score: this.state.score + 1 });
  };

  // Function to reset the game when a flag is clicked for the second time
  gameReset = () => {
    alert("Game over");
    this.setState({ score: 0 });
    console.log(this);
  }

  // Calling randomFlag function to initialize the game
  componentDidMount() {
    this.randomFlag(allFlags);
    console.log(this);
  }

  // Render function 
  render() {
    return (
      <Wrapper>
        <h2 className="title">World Flag Memory Game</h2>
        <h4 className="score">{this.state.score}</h4>
        <div className="container">
          {this.state.allFlags.map((flag) => (
            <FlagCard
              handleClick = {this.handleClick}
              isClicked = {false}
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
