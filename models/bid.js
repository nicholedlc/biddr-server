'use strict';
module.exports = function(sequelize, DataTypes) {
  const Bid = sequelize.define('Bid', {
    bid: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function({Auction}) {
        Bid.belongsTo(Auction);
      }
    }
  });
  return Bid;
};
