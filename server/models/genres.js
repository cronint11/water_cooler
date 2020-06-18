'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genres = sequelize.define('Genres', {
    genresID: DataTypes.INTEGER,
    mediaID: DataTypes.INTEGER,
    genreID: DataTypes.INTEGER
  }, {});
  Genres.associate = function(models) {
    // associations can be defined here
  };
  return Genres;
};