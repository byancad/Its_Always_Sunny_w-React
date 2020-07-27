import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Scoreboard from "./components/Scoreboard";

import friends from "./friends.json";
import CardGrid from "./components/Grid";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topscore: 0,
    clickedPic: [],
    win: 0,
    loss: 0
  };

  shuffleArray = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  clickCount = id => {
    let { win, clickedPic, score, topscore, loss } = this.state;
    let correctGuess = clickedPic.indexOf(id) === -1; //check if value is in array

    if (correctGuess && score + 1 < 12) {
      let newScore = score + 1;
      let newTopScore = newScore > topscore ? newScore : topscore;
      clickedPic.push(id);

      let newFriends = this.shuffleArray(friends);
      console.log(newFriends);
      this.setState({
        score: newScore,
        topscore: newTopScore,
        friends: newFriends
      });
    } else if (correctGuess && score + 1 === 12) {
      this.setState({
        score: 0,
        clickedPic: [],
        win: win + 1
      });
    } else {
      this.setState({
        loss: loss + 1,
        score: 0,
        clickedPic: []
      });
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Scoreboard>
          Losses: {this.state.loss} Wins: {this.state.win} Score:{" "}
          {this.state.score} TopScore: {this.state.topscore}
        </Scoreboard>
        <Title>Its Always Sunny in Philadelphia Clicky Game!</Title>
        <CardGrid friends={this.state.friends} clickCount={this.clickCount} />
      </Wrapper>
    );
  }
}

export default App;
