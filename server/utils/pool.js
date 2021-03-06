const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: 'mydb',
  password: process.env.PASSWORD,
  port: 5432,
});

module.exports = { pool };
