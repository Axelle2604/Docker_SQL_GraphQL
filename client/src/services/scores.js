import { gql } from 'apollo-boost';

const scoresQuery = gql`
  {
    scores {
      id
      score
      userid
      partyid
    }
  }
`;

export default scoresQuery;
