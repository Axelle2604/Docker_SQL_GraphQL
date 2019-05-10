const { pool } = require('../utils/pool');

const getUsers = async () => {
  try {
    const { rows } = await pool.query(`SELECT * FROM users`);
    return rows;
  } catch (e) {
    return null;
  }
};

const getUserById = async userId => {
  try {
    const { rows } = await pool.query(
      `SELECT * FROM users WHERE id = ${userId}`
    );
    return rows[0];
  } catch (e) {
    return null;
  }
};

module.exports = {
  getUsers,
  getUserById,
};
