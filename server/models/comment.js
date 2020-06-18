module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    table: DataTypes.STRING,
    tableID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    date: DataTypes.INTEGER,
    spoiler: DataTypes.TINYINT(1)
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};