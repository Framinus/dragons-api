const db = require('./db');

// if it's for tests only, put it in the tests folder

const clearAllDragons = () => {
  return db.oneOrNone(`
    TRUNCATE dragons RESTART IDENTITY;`);
};

const clearAllHumans = () => {
  return db.oneOrNone(`
    TRUNCATE humans RESTART IDENTITY;
  `);
};

const clearAllData = () => {
  return clearAllDragons()
    .then(() => {
      return clearAllHumans()
        .then(() => {
          return 'All tables cleared';
        })
        .catch(console.error);
    })
    .catch(console.error);
};

const seedDragonsTable = (type, level, currenthp, maxhp, strength, defense, imageurl) => {
  const query = `
    INSERT INTO dragons (type, level, currenthp, maxhp, strength, defense, imageurl)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *`;

  return db.one(query, [type, level, currenthp, maxhp, strength, defense, imageurl]);
};

const seedHumansTable = (type, level, currenthp, maxhp, strength, defense, imageurl) => {
  const query = `
    INSERT INTO humans (type, level, currenthp, maxhp, strength, defense, imageurl)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *`;

  return db.one(query, [type, level, currenthp, maxhp, strength, defense, imageurl]);
};


module.exports = { clearAllData, seedDragonsTable, seedHumansTable };
