'use strict';
module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
    name: DataTypes.STRING,
    typeID: DataTypes.BIGINT,
    serviceID: DataTypes.BIGINT
  }, {});
  Service.associate = function(models) {
    // associations can be defined here
  };
  return Service;
};