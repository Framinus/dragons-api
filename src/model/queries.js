const db = require('./db');

/**
* Add a dragon to the database
*
* @param {string} type
* @param {string} level
* @param {number} currentHP
* @param {number} maxHP
* @param {number} strength
* @param {number} defense
* @param {string} imageUrl
* @returns {promise} - Promise that resolves to an object
* representing the row added to the posts table.
*/

const createDragon = (type, level, currenthp, maxhp, strength, defense, imageurl) => {
  const query = `
    INSERT INTO dragons
      (type, level, currenthp, maxhp, strength, defense, imageurl)
    VALUES
      ($1, $2, $3, $4, $5, $6, $7)
    RETURNING
      *
    `;

  return db.one(query, [type, level, currenthp, maxhp, strength, defense, imageurl]);
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

module.exports = { createDragon, listAllDragonsByLevel, listDragonById, deleteDragonById };
