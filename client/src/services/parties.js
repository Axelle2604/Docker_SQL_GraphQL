import { gql } from 'apollo-boost';

export const partiesQuery = gql`
  {
    parties {
      id
      isfinish
    }
  }
`;

export const createPartyQuery = gql`
  mutation createParty($id: Int) {
    createParty(id: $id) {
      id
    }
  }
`;
