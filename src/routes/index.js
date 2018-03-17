const router = require('express').Router();
const { createDragon, listAllDragonsByLevel, listDragonById } = require('../model/queries');


router.get('/dragons/:level', (req, res) => {
  const { level } = req.params;
  return listAllDragonsByLevel(level)
    .then((dragons) => {
      res.json(dragons);
    })
    .catch((err) => {
      console.error(err);
      res.json({ errorMsg: 'error retrieving dragons' });
    });
});

router.get('/dragons/:id', (req, res) => {
  const { id } = req.params;
  return listDragonById(id)
    .then((dragon) => {
      res.json(dragon);
    })
    .catch((err) => {
      console.error(err);
      res.json({
        errorMsg: 'error retrieving dragon',
      });
    });
});

router.post('/dragons/create', (req, res) => {
  const { type, currentHP, maxHP, strength, defense, imageUrl } = req.body;
  return createDragon(type, currentHP, maxHP, strength, defense, imageUrl)
    .then((newDragon) => {
      res.json({ newDragon });
    })
    .catch((err) => {
      console.error(err);
      res.json({ errorMsg: 'Error creating dragon' });
    });
});

router.get('/dragons/random/:level', (req, res) => {
  const { level } = req.params;
  return listAllDragonsByLevel(level)
    .then((dragons) => {
      const randomIndex = Math.floor(Math.random() * (dragons.length));
      const randomDragon = dragons[randomIndex];
      res.json({ randomDragon });
    })
    .catch((err) => {
      console.error(err);
      res.json({ errorMsg: 'Error retrieving random dragon' });
    });
});

module.exports = router;
