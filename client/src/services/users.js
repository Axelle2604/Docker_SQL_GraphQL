import { gql } from 'apollo-boost';

const usersQuery = gql`
  {
    users {
      id
      username
    }
  }
`;

export default usersQuery;
