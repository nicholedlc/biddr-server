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

router.get('/:id', function(req, res, next) {
  const {id} = req.params;
  Auction
    .findById(id)
    .then(auction => res.json({auction}))
    .catch(err => console.info(err))
})

module.exports = router;
