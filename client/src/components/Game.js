import React, { Component } from 'react';
import { GameContainer } from './styled/gameStyled';

const incrementScore = () => ({ score }) => ({
  score: score + 1,
});

export default class Game extends Component {
  state = {
    score: 0,
  };

  onClickIncrementScore = () => {
    console.log('increeee');
    this.setState(incrementScore);
  };

  render() {
    const { id, partyId, userId } = this.props;
    const { score } = this.state;
    return (
      <div>
        <button onClick={() => console.log('Hello')}>Score +1</button>
        <GameContainer>
          <div>ID {id}</div>
          <div>Party {partyId}</div>
          <div>User {userId}</div>
          <button onClick={() => console.log('Hello')}>Score +1</button> {score}
        </GameContainer>
      </div>
    );
  }
}
