const express = require('express');
const router = express.Router();
const {Auction} = require('../models/index');

router.get('/', function(req, res, next) {
  Auction
    .findAll()
    .then(auctions => {
      res.json({auctions})
    })
    .catch(res.send)
});

module.exports = router;
