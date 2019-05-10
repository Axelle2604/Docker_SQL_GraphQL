const { pool } = require('../utils/pool');

const createParty = async () => {
  try {
    const { rows } = await pool.query(
      `INSERT INTO parties (isFinish) VALUES(false) RETURNING *`
    );
    return rows[0];
  } catch (e) {
    return null;
  }
};

const getPartyById = async partyId => {
  try {
    const { rows } = await pool.query(
      `SELECT * FROM parties WHERE id = ${partyId}`
    );
    return rows[0];
  } catch (e) {
    return null;
  }
};

const getNbMinOfUsersParties = async () => {
  try {
    const { rows } = await pool.query(
      `SELECT MIN(COUNT) FROM (SELECT partyid, COUNT(partyid) FROM users_parties GROUP BY partyid) as min`
    );
    return Object.values(rows[0]);
  } catch (e) {
    return null;
  }
};

const getNbMaxOfUsersParties = async () => {
  try {
    const { rows } = await pool.query(
      `SELECT MAX(COUNT) FROM (SELECT partyid, COUNT(partyid) FROM users_parties GROUP BY partyid) as max`
    );
    return Object.values(rows[0]);
  } catch (e) {
    return null;
  }
};

const getAverageUsersParties = async () => {
  try {
    const { rows } = await pool.query(
      `SELECT AVG(COUNT) FROM (SELECT partyid, COUNT(partyid) FROM users_parties GROUP BY partyid) as avg ;`
    );
    return Math.floor(Object.values(rows[0]));
  } catch (e) {
    return null;
  }
};

const getGoingParties = async () => {
  try {
    const { rows } = await pool.query(
      `SELECT * FROM parties WHERE isFinish = false`
    );
    return rows;
  } catch (e) {
    return null;
  }
};

const getParties = async () => {
  try {
    const { rows } = await pool.query(`SELECT * FROM parties`);
    return rows;
  } catch (e) {
    return null;
  }
};

module.exports = {
  getGoingParties,
  getNbMinOfUsersParties,
  getNbMaxOfUsersParties,
  getAverageUsersParties,
  createParty,
  getPartyById,
  getParties,
};
