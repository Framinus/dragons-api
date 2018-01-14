const router = require('express').Router();
const { createDragon, listAllDragons } = require('../model/queries');

router.get('/dragons', (req, res) => {
  return listAllDragons()
    .then((dragons) => {
      res.json(dragons);
    });
});

router.post('/dragons/create', (req, res) => {
  const { name, age, superpower } = req.body;
  return createDragon(name, age, superpower)
    .then((newDragon) => {
      res.json({ newDragon });
    })
    .catch(console.error);
});


module.exports = router;
