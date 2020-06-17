'use strict';
module.exports = (sequelize, DataTypes) => {
  const Medias = sequelize.define('Medias', {
    mediasID: DataTypes.BIGINT,
    userID: DataTypes.BIGINT,
    mediaID: DataTypes.BIGINT,
    consumed: DataTypes.BOOLEAN
  }, {});
  Medias.associate = function(models) {
    // associations can be defined here
  };
  return Medias;
};