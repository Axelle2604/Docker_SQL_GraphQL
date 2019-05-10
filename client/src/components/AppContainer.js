import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import Users from './Users';
import Parties from './Parties';
import Scores from './Scores';
import MyGame from './MyGame';

import {
  createUsersPartiesQuery,
  usersPartiesQuery,
} from '../services/usersParties';
import UsersParties from './UsersParties';

class AppContainer extends Component {
  state = {
    selectedUsers: [],
    selectedParty: null,
    usersParties: [],
  };

  static getDerivedStateFromProps = (
    { getUsersParties: { users_parties } },
    state
  ) => {
    return { usersParties: users_parties };
  };

  onClickUser = (userName, id) => {
    const { selectedUsers } = this.state;
    this.setState({
      selectedUsers: [...selectedUsers, { userName, id }],
    });
  };

  onClickParty = partyId => this.setState({ selectedParty: partyId });

  addToParty = () => {
    const { selectedUsers, selectedParty } = this.state;
    const { createUsersParties } = this.props;
    const selectedUniqueUsers = Array.from(new Set(selectedUsers)).map(
      ({ id }) => id
    );
    if (selectedUsers.length > 0 && selectedParty) {
      createUsersParties({
        variables: {
          usersid: selectedUniqueUsers,
          partyid: selectedParty,
        },
        refetchQueries: [{ query: usersPartiesQuery }],
      });
      this.setState({ selectedUsers: [], selectedParty: null });
    } else {
      console.log('Please select users & party.');
    }
  };

  render() {
    const { selectedUsers, selectedParty, usersParties } = this.state;
    console.log(this.props.getUsersParties);
    return (
      <div>
        <Users onClickUser={this.onClickUser} selectedUsers={selectedUsers} />
        <MyGame />
        <button onClick={() => console.log('Hello')}>Score +11</button>
        <Parties
          onClickParty={this.onClickParty}
          selectedParty={selectedParty}
          addToParty={this.addToParty}
        />
        <UsersParties />
        <Scores />
        <h1>Games in progress</h1>
      </div>
    );
  }
}

export default compose(
  graphql(createUsersPartiesQuery, { name: 'createUsersParties' }),
  graphql(usersPartiesQuery, { name: 'getUsersParties' })
)(AppContainer);
