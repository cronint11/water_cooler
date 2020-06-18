module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    handle: { type: DataTypes.STRING, allowNull: false },
    email: DataTypes.STRING,
    pwd: { type: DataTypes.STRING, allowNull: false },
    avatar: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Review, {
      foreignKey: 'userID',
      as: 'reviews'
    });
  };
  return User;
};