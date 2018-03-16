const pgp = require('pg-promise')();

const connectionString =
  process.env.NODE_ENV === 'test'
    ? process.env.DATABASE_URL_TEST
    : process.env.DATABASE_URL;

const db = pgp(connectionString);

module.exports = db;
