'use strict';
module.exports = function(sequelize, DataTypes) {
  var Auction = sequelize.define('Auction', {
    title: DataTypes.STRING,
    details: DataTypes.TEXT,
    endsOn: DataTypes.DATE,
    reservePrice: DataTypes.DOUBLE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Auction;
};