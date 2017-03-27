const express = require('express');
const router = express.Router();
const {Auction} = require('../models/index');

router.get('/', function(req, res, next) {
  Auction
    .findAll()
    .then(auctions => {
      res.render('auctions/index', {auctions})
    })
    .catch(res.send)
});

module.exports = router;
