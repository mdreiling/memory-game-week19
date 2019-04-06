import React, { Component } from "react";
import FlagCard from "./components/FlagCard";
import Wrapper from "./components/Wrapper";
import flags from "../src/flags.json";

class App extends Component {
  state = {
    flags,
    score: 0,
    selectedFlags: []
  };

  // Calling randomFlag function to initialize the game
  componentDidMount() {
    this.randomFlag();
  }
  
  // Function to randomize cards that are being shown
  randomFlag = () => {

    // Reset Selected flags array on state
    this.setState({ selectedFlags: [] });

    const shuffleState = {...this.state}

    let toShuffleArray = []; 
    toShuffleArray = shuffleState.flags;

    // Set up shuffle function
    const shuffle = function(toShuffle) {
      toShuffle.sort(() => Math.random() - 0.5);
    };

    // // Call shuffle function and pass in flagArray
    shuffle(toShuffleArray);

    let selectedFlags = [];

    // For loop to select first 16 flags in shuffled array
    for (var i = 0; i < 16; i++) {  
      selectedFlags.push(this.state.flags[i]);
    }

    // // Set state of selected flags array with the newly made random flag array
    // this.setState({ selectedFlags: randomFlag });

    // Set selected flag array on state which will be used throughout app
    this.setState({ selectedFlags: selectedFlags });
  };

  // Function to show a card has been clicked
  handleClick = clickedCard => {

    // Create a duplicate of state so that the status of the clicked flag can be changed
    const clickedState = {...this.state};
    // console.log(clickedCard.id);

    let id = clickedCard.id

    let indexPosition = this.state.flags.findIndex(flag => flag.id === id);
    console.log(indexPosition);

    // If/else statement to handle game logic
    if (!clickedCard.isClicked) {

      // Change status of clicked flag
      clickedState.flags[indexPosition].isClicked = true;

      // Update app state with array 
      this.setState(clickedState);

      this.handleScore();
      this.randomFlag();
    } else {
      this.gameReset();
      this.randomFlag();
      // this.randomFlag();
    }
  };

  // Function to update the score when a previously unclicked flag is clicked
  handleScore = () => {
    this.setState({ score: this.state.score + 1 });
  };

  // Function to reset the game when a flag is clicked for the second time
  gameReset = () => {

    // Set click status of all flags to false
    // Create duplicate state so flag status can be updated
    const resetState = {...this.state};
    
    // For loop to change all flag's click status to false
    let i;
    for (i = 0; i < resetState.flags.length; i++) {
      resetState.flags[i].isClicked = false;
    }

    // Set app state to updated reset state and reset score to 0
    this.setState(resetState);
    this.setState({ score: 0 });
  }

  // Render function 
  render() {
    return (
      <Wrapper>
        <h2 className="title">World Flag Memory Game</h2>
        <h4 className="score">{this.state.score}</h4>
        <div>
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