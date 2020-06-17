'use strict';
module.exports = (sequelize, DataTypes) => {
  const Media = sequelize.define('Media', {
    mediaID: DataTypes.BIGINT,
    typeid: DataTypes.BIGINT,
    title: DataTypes.STRING,
    mediaDBID: DataTypes.STRING,
    mediaDBName: DataTypes.STRING
  }, {});
  Media.associate = function(models) {
    // associations can be defined here
  };
  return Media;
};