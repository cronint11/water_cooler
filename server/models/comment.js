'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    commentID: DataTypes.BIGINT,
    table: DataTypes.STRING,
    tableID: DataTypes.BIGINT,
    userID: DataTypes.BIGINT,
    comment: DataTypes.TEXT,
    date: DataTypes.BIGINT,
    spoiler: DataTypes.BOOLEAN
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};