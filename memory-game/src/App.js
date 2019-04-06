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

    const shuffleState = {...this.state};
    console.log(this.state.flags);
    console.log(shuffleState.flags);

    shuffleState.selectedFlags = shuffleState.flags;

    // Set up shuffle function
    const shuffle = function(shuffleArray) {
      shuffleArray.sort(() => Math.random() - 0.5);
    };

    // Call shuffle function and pass in flagArray
    shuffle(shuffleState.flags);
    console.log(shuffleState.flags);
    

    // // For loop to select random flags to display
    // for (var i = 0; i < 16; i++) {  
    //   randomFlag.push(allFlags[Math.floor(Math.random()*allFlags.length)]);
    // }

    // // Set state of selected flags array with the newly made random flag array
    // this.setState({ selectedFlags: randomFlag });

    // Set selected flag array on state which will be used throughout app
    this.setState(shuffleState);
  };

  // Function to show a card has been clicked
  handleClick = clickedCard => {

    // Create a duplicate of state so that the status of the clicked flag can be changed
    const clickedState = {...this.state};

    // If/else statement to handle game logic
    if (!clickedCard.isClicked) {

      // Change status of clicked flag
      clickedState.selectedFlags[clickedCard.id-1].isClicked = true;

      // Update app state with array 
      this.setState(clickedState);
      this.handleScore();
      this.randomFlag();
      // this.randomFlag();
    } else {
      this.gameReset();
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
    for (i = 0; i < resetState.selectedFlags.length; i++) {
      resetState.selectedFlags[i].isClicked = false;
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