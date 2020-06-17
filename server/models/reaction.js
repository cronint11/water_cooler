'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reaction = sequelize.define('Reaction', {
    reactionID: DataTypes.BIGINT,
    reaction: DataTypes.STRING
  }, {});
  Reaction.associate = function(models) {
    // associations can be defined here
  };
  return Reaction;
};