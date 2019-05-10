import React from 'react';
import { graphql } from 'react-apollo';
import usersQuery from '../services/users';
import { UsersContainer, ButtonsContainer } from './styled/usersStyled';
import MyGame from './MyGame';

const Users = ({ data: { users }, onClickUser, selectedUsers }) => {
  const onClickUserName = (user, id) => {
    onClickUser(user, id);
  };

  const usersList = (
    <ButtonsContainer>
      {users &&
        users.map(({ id, username }) => (
          <li key={id}>
            <button onClick={onClickUserName.bind(this, username, id)}>
              {username} <i className="fas fa-user-plus" />
            </button>
          </li>
        ))}
    </ButtonsContainer>
  );
  const selectedUsersList = Array.from(new Set(selectedUsers));
  return (
    <UsersContainer>
      <h3>Select a user</h3>
      {usersList}

      <span>
        Selected users:{' '}
        {selectedUsersList &&
          selectedUsersList.map(({ userName, id }) => (
            <span key={id}>
              [{userName} - {id}]
            </span>
          ))}
      </span>
    </UsersContainer>
  );
};

export default graphql(usersQuery)(Users);
