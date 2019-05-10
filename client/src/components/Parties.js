import React from 'react';
import { compose, graphql } from 'react-apollo';
import { partiesQuery, createPartyQuery } from '../services/parties';

const Parties = ({
  getParties: { parties },
  createParty,
  onClickParty,
  selectedParty,
  addToParty,
}) => {
  const onClickCreateParty = () => {
    createParty({
      refetchQueries: [{ query: partiesQuery }],
    });
  };

  const onClickSelectParty = partyId => {
    onClickParty(partyId);
  };

  const onClickAddToParty = () => {
    addToParty();
  };

  const partiesList = (
    <ul>
      {parties &&
        parties.map(({ id, isfinish }) => {
          return (
            <div key={id}>
              {isfinish ? (
                <li key={id}>{id} - End</li>
              ) : (
                <button key={id} onClick={onClickSelectParty.bind(this, id)}>
                  {id} - In progress
                </button>
              )}
            </div>
          );
        })}
    </ul>
  );

  return (
    <div>
      <h3>Parties</h3>
      {parties && partiesList}
      <button onClick={onClickCreateParty}>Create party</button>
      <button onClick={onClickAddToParty}>Add to party</button>
      <div>Selected party : {selectedParty}</div>
    </div>
  );
};

export default compose(
  graphql(partiesQuery, { name: 'getParties' }),
  graphql(createPartyQuery, { name: 'createParty' })
)(Parties);
