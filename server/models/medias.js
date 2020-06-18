'use strict';
module.exports = (sequelize, DataTypes) => {
  const Medias = sequelize.define('Medias', {
    mediasID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER,
    mediaID: DataTypes.INTEGER,
    consumed: DataTypes.TINYINT(1)
  }, {});
  Medias.associate = function(models) {
    // associations can be defined here
  };
  return Medias;
};