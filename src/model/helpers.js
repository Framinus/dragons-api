const db = require('./db');

const clearAllDragons = () => {
  return db.oneOrNone(`
    TRUNCATE dragons RESTART IDENTITY;`);
};

const seedDatabase = (name, age, superpower) => {
  return db.one(`
    INSERT INTO dragons (name, age, superpower)
    VALUES ($1, $2, $3)
    RETURNING *`, [name, age, superpower]);
};


module.exports = { clearAllDragons, seedDatabase };
