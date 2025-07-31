const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Game route works!');
});

module.exports = router;