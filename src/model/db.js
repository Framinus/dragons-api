const pgp = require('pg-promise')();

const connectionString =
  process.env.NODE_ENV === 'test'
    ? "postgres://localhost:5432/dragons_test"
    : process.env.DATABASE_URL;

console.log('connectionString', connectionString);

const db = pgp(connectionString);

module.exports = db;
