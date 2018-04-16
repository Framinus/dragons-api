const router = require('express').Router();
const { createDragon, listAllDragons, listAllDragonsByLevel, listAllHumans, listDragonById, listHumanById } = require('../model/queries');

// get all dragons of a particular level
router.get('/dragons/level/:level', (req, res) => {
  const { level } = req.params;
  return listAllDragonsByLevel(level)
    .then((dragons) => {
      if (dragons.length > 0) {
        res.json(dragons);
      } else {
        res.status(400).json({ errorMsg: 'that level does not exist' });
      }
    })
    .catch((err) => {
      console.error(err);
      res.json({ errorMsg: 'error retrieving dragons' });
    });
});

// gets all dragons from the database.
router.get('/dragons', (req, res) => {
  return listAllDragons()
    .then((dragons) => {
      res.json(dragons);
    })
    .catch((err) => {
      console.error(err);
      res.json({ errorMsg: 'error retrieving dragons' });
    });
});

// gets a dragon of a particular id
router.get('/dragons/:id', (req, res) => {
  const { id } = req.params;
  return listDragonById(id)
    .then((dragon) => {
      res.json(dragon);
    })
    .catch((err) => {
      console.error('error from dragons/:id', err);
      res.json({
        errorMsg: 'error retrieving dragon',
      });
    });
});

// add a dragon to the stock list.
router.post('/dragons/create', (req, res) => {
  const { type, currenthp, maxhp, strength, defense, imageurl } = req.body;
  return createDragon(type, currenthp, maxhp, strength, defense, imageurl)
    .then((newDragon) => {
      res.json({ newDragon });
    })
    .catch((err) => {
      console.error('error from dragons/create', err);
      res.json({ errorMsg: 'Error creating dragon' });
    });
});

// retrieves a random dragon of a particular level.
router.get('/dragons/random/:level', (req, res) => {
  const { level } = req.params;
  return listAllDragonsByLevel(level)
    .then((dragons) => {
      if (dragons.length > 0) {
        const randomIndex = Math.floor(Math.random() * (dragons.length));
        const randomDragon = dragons[randomIndex];
        res.json({ randomDragon });
      } else {
        res.status(400).json({ errorMsg: 'that level does not exist' });
      }
    })
    .catch((err) => {
      console.error('error from dragons/random/:level', err);
      res.json({ errorMsg: 'Error retrieving random dragon' });
    });
});

// retrieves all humans from the database.
router.get('/humans', (req, res) => {
  return listAllHumans()
    .then((humans) => {
      res.json({ humans });
    })
    .catch((err) => {
      console.error('error from /humans', err);
      res.json({ errorMsg: 'Error retrieving list of humans' });
    });
});

router.get('/humans/:id', (req, res) => {
  const { id } = req.params;
  return listHumanById(id)
    .then((human) => {
      res.json({ human });
    })
    .catch((err) => {
      console.error('Error from /humans/:id', err);
      res.status(400).json({ errorMsg: 'Error retrieving human from database.' });
    });
});

module.exports = router;
