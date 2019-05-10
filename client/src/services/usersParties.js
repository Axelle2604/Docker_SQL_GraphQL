import { gql } from 'apollo-boost';

export const usersPartiesQuery = gql`
  {
    users_parties {
      id
      userid
      partyid
    }
  }
`;

export const createUsersPartiesQuery = gql`
  mutation createUserParty($usersId: [Int], $partyId: Int) {
    createUserParty(usersId: $usersId, partyId: partyId) {
      userid
      partyid
    }
  }
`;
