const express = require('express');
const router = express.Router();
const path = require('path');

router.get(['/','/index.html','/index'], (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

module.exports = router;