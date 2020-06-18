'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reaction = sequelize.define('Reaction', {
    reactionID: DataTypes.INTEGER,
    reaction: DataTypes.STRING
  }, {});
  Reaction.associate = function(models) {
    // associations can be defined here
  };
  return Reaction;
};