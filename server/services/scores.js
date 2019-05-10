const { pool } = require('../utils/pool');

const getNbScores = async () => {
  try {
    const { rows } = await pool.query(`SELECT COUNT(id) FROM scores`);
    return Object.values(rows[0]);
  } catch (e) {
    return null;
  }
};

const getLowestScore = async () => {
  try {
    const { rows } = await pool.query(
      `SELECT * FROM scores WHERE score = (SELECT MIN(score) FROM scores)`
    );
    return rows[0];
  } catch (e) {
    return null;
  }
};

const getHighestScore = async () => {
  try {
    const { rows } = await pool.query(
      `SELECT * FROM scores WHERE score = (SELECT MAX(score) FROM scores)`
    );
    return rows[0];
  } catch (e) {
    return null;
  }
};

const getScores = async () => {
  try {
    const { rows } = await pool.query(`SELECT * FROM scores`);
    return rows;
  } catch (e) {
    return null;
  }
};

module.exports = {
  getNbScores,
  getHighestScore,
  getLowestScore,
  getScores,
};
