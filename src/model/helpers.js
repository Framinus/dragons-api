const db = require('./db');

const clearAllDragons = () => {
  return db.oneOrNone(`
    TRUNCATE dragons RESTART IDENTITY;`);
};

const seedDatabase = (type, level, currenthp, maxhp, strength, defense, imageurl) => {
  const query = `
    INSERT INTO dragons (type, level, currenthp, maxhp, strength, defense, imageurl)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *`;

  return db.one(query, [type, level, currenthp, maxhp, strength, defense, imageurl]);
};


module.exports = { clearAllDragons, seedDatabase };
