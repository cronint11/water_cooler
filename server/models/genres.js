'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genres = sequelize.define('Genres', {
    genresID: DataTypes.BIGINT,
    mediaID: DataTypes.BIGINT,
    genreID: DataTypes.BIGINT
  }, {});
  Genres.associate = function(models) {
    // associations can be defined here
  };
  return Genres;
};