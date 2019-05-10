import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { usersPartiesQuery } from '../services/usersParties';

const incrementScore = () => ({ score }) => ({
  score: score + 1,
});

class UsersParties extends Component {
  state = {
    score: 0,
  };

  onClickIncrementScore = () => {
    this.setState(incrementScore, () => console.log(this.state.score));
  };

  render() {
    const {
      data: { users_parties },
    } = this.props;
    const { score } = this.state;
    const usersPartiesList = (
      <ul>
        {users_parties &&
          users_parties.map(({ id, userid, partyid }) => (
            <li key={id}>
              {id} - userId: {userid} - partyId: {partyid} -{' '}
              <button onClick={this.onClickIncrementScore}>Score +1</button> -
              score: {score}
            </li>
          ))}
      </ul>
    );
    return (
      <div>
        <h3>Users Parties</h3>
        {users_parties && usersPartiesList}
      </div>
    );
  }
}

export default graphql(usersPartiesQuery)(UsersParties);
