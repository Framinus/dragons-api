const db = require('./db');

/**
* Add a dragon to the database
*
* @param {string} type
* @param {string} level
* @param {number} currenthp
* @param {number} maxhp
* @param {number} strength
* @param {number} defense
* @param {string} imageurl
* @returns {promise} - Promise that resolves to an object
* representing the row added to the posts table.
*/
const createDragon = (type, level, currenthp, maxhp, strength, defense, imageurl) => {
  const query = `
    INSERT INTO dragons
      (type, level, currenthp, maxhp, strength, defense, imageurl)
    VALUES
      ($/type/, $/level/, $/currenthp/, $/maxhp/, $/strength/, $/defense/, $/imageurl/)
    RETURNING
      *
    `;

  return db.one(query, args);
};

/**
* List all dragons in the database
* @param {string} level
* @returns {promise} - Promise that resolves to an object
* representing all of the rows in the dragons table that match a given level.
*/

const listAllDragonsByLevel = (level) => {
  const query = `
    SELECT
      *
    FROM
      dragons
    WHERE level=$1`;
  return db.any(query, level);
};

/**
* List a dragon by id.
*
* @param {number} id
* @returns {promise} - Promise that resolves to an object
* representing a row that matches the id passed in.
*/

const listDragonById = (id) => {
  const query = `
    SELECT
      *
    FROM
      dragons
    WHERE
      id=$1
  `;
  return db.one(query, id);
};

/**
*
* Deletes a row in the dragons table matching the passed id.
* @param {number} id
* @returns {promise} - Promise that resolves to a null object
*
*/

const deleteDragonById = (id) => {
  const query = `
    DELETE
    FROM
      dragons
    WHERE id=$1
  `;
  return db.oneOrNone(query, id);
};

/**
*
* Gets all humans from the humans table.
* @returns {promise} - Promise that resolves to all rows in the humans table.
*
*/

const listAllHumans = () => {
  const query = `
    SELECT
      *
    FROM
      humans
  `;
  return db.any(query);
};

/**
*
* Gets a human by id from the humans table.
* @param {number} id
* @returns {promise} - returns a promise that resolves to a row in the humans table matching the given id.
*
*/

const listHumanById = (id) => {
  const query = `
    SELECT
      *
    FROM
      humans
    WHERE
      id=$1
  `;
  return db.one(query, id);
};

module.exports = {
  createDragon,
  listAllDragonsByLevel,
  listDragonById,
  listAllHumans,
  listHumanById,
  deleteDragonById,
};
