'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    reviewID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER,
    mediaID: DataTypes.INTEGER,
    reviewTitle: DataTypes.STRING,
    review: DataTypes.TEXT,
    rating: DataTypes.DOUBLE,
    spoiler: DataTypes.TINYINT(1),
    dateCreated: DataTypes.INTEGER,
    lastUpdated: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, {
      foreignKey: 'userID',
      onDelete: 'CASCADE'
    });
  };
  return Review;
};