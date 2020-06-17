'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    genreid: DataTypes.BIGINT,
    name: DataTypes.STRING
  }, {});
  Genre.associate = function(models) {
    // associations can be defined here
  };
  return Genre;
};