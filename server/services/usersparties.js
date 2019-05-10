const { pool } = require('../utils/pool');

const getUsersParties = async () => {
  try {
    console.log('ok');
    const { rows } = await pool.query(`SELECT * FROM users_parties`);
    console.log(rows);
    return rows;
  } catch (e) {
    console.log(e);
  }
};

const createUsersParty = async (usersId, partyId) => {
  console.log(usersId, partyId);
  try {
    const results = await Promise.all(
      usersId.map(userId => {
        return pool.query(
          `INSERT INTO users_parties(userid, partyid) VALUES (${userId}, ${partyId}) RETURNING *`
        );
      })
    );
    return results.map(({ rows }) => rows[0]);
  } catch (e) {
    return null;
  }
};

module.exports = {
  createUsersParty,
  getUsersParties,
};
