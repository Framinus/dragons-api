const db = require('./db');

// create
const createDragon = (name, age, superpower) => {
  return db.one(`
    INSERT INTO dragons (name, age, superpower)
    VALUES ($1, $2, $3)
    RETURNING *`, [name, age, superpower]);
};

// read
const listAllDragons = () => {
  return db.any(`
    SELECT * FROM dragons`);
};

const listDragonById = (id) => {
  // create me!
};

// update
const editDragonById = (id) => {
  // create me!
};

// delete
const deleteDragonById = (id) => {
  // create me!
};

module.exports = { createDragon, listAllDragons, listDragonById, editDragonById, deleteDragonById };
