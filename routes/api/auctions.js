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
    .catch(err => {
      res.json({error: {name: err.name, message: err.message}})
    })
});

// Auctions#post - URL: /api/auctions, METHOD: POST
router.post('/', function(req, res, next) {
  const {title, details, endsOn, reservePrice} = req.body;
  Auction
    .create({title, details, endsOn, reservePrice})
    .then(auction => {
      res.json({auction})
    })
    .catch(err => {
      res.json({error: {name: err.name, message: err.message}})
    })
})

//Auctions#show - URL: /api/auctions/:id, METHOD: GET
router.get('/:id', function(req, res, next) {
  const {id} = req.params;
  Auction
    .findById(id)
    .then(auction => {
      res.json({auction})
    })
    .catch(err => {
      res.json({error: {name: err.name, message: err.message}})
    })
});

router.delete('/:id', function(req, res, next) {
  const {id} = req.params;
  Auction
    .findById(id)
    .then(auction =>
      auction.destroy()
      .then(() => res.json({auction}))
    )
    .catch(err => {
      res.json({error: {name: err.name, message: err.message}})
    })
});

module.exports = router;
