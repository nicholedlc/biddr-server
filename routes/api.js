const express = require('express');
const router = express.Router();
const auctions = require('./api/auctions');

router.use('/auctions', auctions);

module.exports = router;
