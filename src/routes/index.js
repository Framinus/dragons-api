const router = require('express').Router();
const { createDragon, listAllDragons } = require('../model/queries');


router.get('/dragons', (req, res) => {
  return listAllDragons()
    .then((dragons) => {
      res.json(dragons);
    });
});

router.post('/dragons/create', (req, res) => {
  const { type, currentHP, maxHP, strength, defense, imageUrl } = req.body;
  return createDragon(type, currentHP, maxHP, strength, defense, imageUrl)
    .then((newDragon) => {
      res.json({ newDragon });
    })
    .catch(console.error);
});

router.get('/dragons/random', (req, res) => {
  return listAllDragons()
    .then((dragons) => {
      const randomIndex = Math.floor(Math.random() * (dragons.length));
      const randomDragon = dragons[randomIndex];
      res.json({ randomDragon });
    });
});


module.exports = router;
