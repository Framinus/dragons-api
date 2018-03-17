const db = require('./db');

/**
* Add a dragon to the database
*
* @param {string} type
* @param {number} currentHP
* @param {number} maxHP
* @param {number} strength
* @param {number} defense
* @param {string} imageUrl
* @returns {promise} - Promise that resolves to an object
* representing the row added to the posts table.
*/

const createDragon = (type, currentHP, maxHP, strength, defense, imageUrl) => {
  const query = `
    INSERT INTO dragons
      (type, currentHP, maxHP, strength, defense, imageUrl)
    VALUES
      ($1, $2, $3, $4, $5, $6)
    RETURNING
      *
    `;

  return db.one(query, [type, currentHP, maxHP, strength, defense, imageUrl]);
};

/**
* List all dragons in the database
* @returns {promise} - Promise that resolves to an object
* representing all of the rows in the dragons table.
*/

const listAllDragons = () => {
  const query = `
    SELECT
      *
    FROM
      dragons`;
  return db.any(query);
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

// delete
const deleteDragonById = (id) => {
  const query = `
    DELETE
    FROM
      dragons
    WHERE id=$1
  `;
  return db.oneOrNone(query, id);
};

module.exports = { createDragon, listAllDragons, listDragonById, deleteDragonById };
