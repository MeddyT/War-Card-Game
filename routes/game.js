const express = require('express');
const router = express.Router();
const gameController= require('../controllers/gameController');

router.get('/', (req, res) => {
  res.send('Game route works!');
});

module.exports = router;