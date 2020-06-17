'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define('Subscription', {
    subscriptionID: DataTypes.BIGINT,
    userID: DataTypes.BIGINT,
    serviceID: DataTypes.BIGINT
  }, {});
  Subscription.associate = function(models) {
    // associations can be defined here
  };
  return Subscription;
};