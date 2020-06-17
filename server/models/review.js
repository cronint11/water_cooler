'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    reviewID: DataTypes.BIGINT,
    userID: DataTypes.BIGINT,
    mediaID: DataTypes.BIGINT,
    reviewTitle: DataTypes.STRING,
    review: DataTypes.TEXT,
    rating: DataTypes.DOUBLE,
    spoiler: DataTypes.BOOLEAN,
    dateCreated: DataTypes.BIGINT,
    lastUpdated: DataTypes.BIGINT
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};