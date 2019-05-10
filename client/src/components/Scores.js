import React from 'react';
import { graphql } from 'react-apollo';
import scoresQuery from '../services/scores';

const Scores = ({ data: { scores } }) => {
  const scoresList = (
    <ul>
      {scores &&
        scores.map(({ id, score, userid, partyid }) => (
          <li key={id}>
            {id} - {score} - userId: {userid} - partyId: {partyid}
          </li>
        ))}
    </ul>
  );
  return (
    <div>
      <h3>Scores</h3>
      {scores && scoresList}
    </div>
  );
};

export default graphql(scoresQuery)(Scores);
