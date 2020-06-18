'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reactions = sequelize.define('Reactions', {
    reactionsID: DataTypes.INTEGER,
    table: DataTypes.STRING,
    tableID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER,
    reactionID: DataTypes.INTEGER
  }, {});
  Reactions.associate = function(models) {
    // associations can be defined here
  };
  return Reactions;
};