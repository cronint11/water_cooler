'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reactions = sequelize.define('Reactions', {
    reactionsID: DataTypes.BIGINT,
    table: DataTypes.STRING,
    tableID: DataTypes.BIGINT,
    userID: DataTypes.BIGINT,
    reactionID: DataTypes.BIGINT
  }, {});
  Reactions.associate = function(models) {
    // associations can be defined here
  };
  return Reactions;
};