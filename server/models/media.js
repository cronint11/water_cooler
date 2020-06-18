'use strict';
module.exports = (sequelize, DataTypes) => {
  const Media = sequelize.define('Media', {
    mediaID: DataTypes.INTEGER,
    typeid: DataTypes.INTEGER,
    title: DataTypes.STRING,
    mediaDBID: DataTypes.STRING,
    mediaDBName: DataTypes.STRING
  }, {});
  Media.associate = function(models) {
    // associations can be defined here
  };
  return Media;
};