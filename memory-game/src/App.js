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


  // Calling randomFlag function to initialize the game
  componentDidMount() {
    this.randomFlag(allFlags);
  }
  
  // Function to randomize cards that are being shown
  randomFlag = allFlags => {

    // // Reset arrays
    // this.setState({ selectedFlags: [] });
    // let randomFlag = [];

    // // For loop to select random flags to display
    // for (var i = 0; i < 16; i++) {  
    //   randomFlag.push(allFlags[Math.floor(Math.random()*allFlags.length)]);
    // }

    // // Set state of selected flags array with the newly made random flag array
    // this.setState({ selectedFlags: randomFlag });

    // Dummy set state for testing
    this.setState({ selectedFlags: allFlags });
  };

  // Function to show a card has been clicked
  handleClick = clickedCard => {
    // console.log(clickedCard);
    // console.log(this.state.allFlags[clickedCard.id]);

    const clickedArray = {...this.state};
    console.log(clickedArray.allFlags);
    if (!clickedCard.isClicked) {
      clickedArray.allFlags[clickedCard.id-1].isClicked = true;
      console.log(clickedArray.allFlags[clickedCard.id-1]);
      this.setState(clickedArray);
      // console.log(clickedCard.isClicked);
      this.handleScore();
      // this.randomFlag(allFlags);
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

  // Render function 
  render() {
    return (
      <Wrapper>
        <h2 className="title">World Flag Memory Game</h2>
        <h4 className="score">{this.state.score}</h4>
        <div className="container">
          {this.state.selectedFlags.map((flag) => (
            <FlagCard
              handleClick = {this.handleClick}
              isClicked = {flag.isClicked}
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
