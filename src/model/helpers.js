const db = require('./db');

const clearAllDragons = () => {
  return db.oneOrNone(`
    TRUNCATE dragons RESTART IDENTITY;`);
};

const seedDatabase = (type, level, currentHP, maxHP, strength, defense, imageUrl) => {
  const query = `
    INSERT INTO dragons (type, level, currentHP, maxHP, strength, defense, imageUrl)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *`;

  return db.one(query, [type, level, currentHP, maxHP, strength, defense, imageUrl]);
};


module.exports = { clearAllDragons, seedDatabase };
