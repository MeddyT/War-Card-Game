const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ scores: [] }); // Placeholder
});

module.exports = router;

