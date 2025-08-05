const express = require('express');
const router = express.Router();
const gameController= require('../controllers/gameController');

router.post('/start',gameController.startGame);
router.post('/turn', gameController.playTurn);

module.exports = router;