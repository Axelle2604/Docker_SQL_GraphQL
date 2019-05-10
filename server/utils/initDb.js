const { pool } = require('./pool');
const {
  usersData,
  partiesData,
  usersPartiesData,
  scoresData,
} = require('./baseDb');

const tables = ['users', 'parties', 'users_parties', 'scores'];

const dropTables = async () => {
  try {
    await Promise.all(
      tables.map(async table => {
        await pool.query(`DROP TABLE ${table}`);
      })
    );
  } catch (e) {
    console.error(e);
  }
};

const createTables = async () => {
  try {
    await pool.query(`CREATE TABLE users (id BIGSERIAL, username TEXT);`);
  } catch (e) {
    console.error(e);
  }
  try {
    await pool.query(`CREATE TABLE parties (id BIGSERIAL, isfinish BOOLEAN);`);
  } catch (e) {
    console.error(e);
  }
  try {
    await pool.query(
      `CREATE TABLE users_parties (id BIGSERIAL, userid INTEGER, partyid INTEGER);`
    );
  } catch (e) {
    console.error(e);
  }
  try {
    await pool.query(
      `CREATE TABLE scores (id BIGSERIAL, score INTEGER, userid INTEGER, partyid INTEGER);`
    );
  } catch (e) {
    console.error(e);
  }
};

const fillTable = async (text, values) => {
  try {
    await pool.query(text, values);
  } catch (e) {
    console.error(e);
  }
};

const fillUsersTable = async () => {
  await fillTable(usersData.text, usersData.values1);
  await fillTable(usersData.text, usersData.values2);
  await fillTable(usersData.text, usersData.values3);
  await fillTable(usersData.text, usersData.values4);
};

const fillPartiesTable = async () => {
  await fillTable(partiesData.text, partiesData.values1);
  await fillTable(partiesData.text, partiesData.values2);
  await fillTable(partiesData.text, partiesData.values3);
};

const fillUsersPartiesTable = async () => {
  await fillTable(usersPartiesData.text, usersPartiesData.values1);
  await fillTable(usersPartiesData.text, usersPartiesData.values2);
  await fillTable(usersPartiesData.text, usersPartiesData.values3);
  await fillTable(usersPartiesData.text, usersPartiesData.values4);
  await fillTable(usersPartiesData.text, usersPartiesData.values5);
  await fillTable(usersPartiesData.text, usersPartiesData.values6);
};

const fillScoresTable = async () => {
  await fillTable(scoresData.text, scoresData.values1);
  await fillTable(scoresData.text, scoresData.values2);
};

const fillTables = async () => {
  await fillUsersTable();
  await fillPartiesTable();
  await fillUsersPartiesTable();
  await fillScoresTable();
};

const initDb = async () => {
  await dropTables();
  await createTables();
  await fillTables();
};

initDb();
