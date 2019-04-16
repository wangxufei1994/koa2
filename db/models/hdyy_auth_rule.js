/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_auth_rule', {
    id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    name: {
      type: DataTypes.CHAR(80),
      allowNull: false,
      defaultValue: ''
    },
    title: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      defaultValue: ''
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    condition: {
      type: DataTypes.STRING(300),
      allowNull: false,
      defaultValue: ''
    },
    iurl: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'hdyy_auth_rule'
  });
};
