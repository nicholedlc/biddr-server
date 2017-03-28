'use strict';
module.exports = function(sequelize, DataTypes) {
  const Auction = sequelize.define('Auction', {
    title: DataTypes.STRING,
    details: DataTypes.TEXT,
    endsOn: DataTypes.DATE,
    reservePrice: DataTypes.DOUBLE
  }, {
    classMethods: {
      associate: function({Bid}) {
        Auction.hasMany(Bid)
      }
    }
  });
  return Auction;
};
