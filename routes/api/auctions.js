const express = require('express');
const router = express.Router();
const {Auction} = require('../../models/index');

// Auctions#index - URL: /api/auctions, METHOD: GET
router.get('/', function(req, res, next) {
  Auction
    .findAll()
    .then(auctions => {
      res.json({auctions})
    })
    .catch(res.send)
});

//Auctions#show - URL: /api/auctions/:id, METHOD: GET
router.get('/:id', function(req, res, next) {
  const {id} = req.params;
  Auction
    .findById(id)
    .then(auction => {
      res.json({auction})
    })
    .catch(err => console.info(err))
});

module.exports = router;
