/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_reply', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    identify: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_reply'
  });
};
