const usersData = {
  text: `INSERT INTO users (id, username) VALUES($1, $2) RETURNING *`,
  values1: [0, 'player1'],
  values2: [1, 'player2'],
  values3: [2, 'player3'],
  values4: [3, 'player4'],
};

const partiesData = {
  text: `INSERT INTO parties (id, isfinish) VALUES($1, $2) RETURNING *`,
  values1: [111, true],
  values2: [222, false],
  values3: [333, false],
};

const usersPartiesData = {
  text: `INSERT INTO users_parties (id, userid, partyid) VALUES($1, $2, $3) RETURNING *`,
  values1: [0, 0, 0],
  values2: [1, 1, 0],
  values3: [2, 0, 1],
  values4: [3, 1, 1],
  values5: [4, 2, 2],
  values6: [5, 3, 2],
};

const scoresData = {
  text: `INSERT INTO scores (id, score, userid, partyid) VALUES($1, $2, $3, $4) RETURNING *`,
  values1: [0, 100, 0, 0],
  values2: [1, 95, 1, 0],
};

module.exports = { usersData, partiesData, usersPartiesData, scoresData };
