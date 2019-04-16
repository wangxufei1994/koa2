/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_config', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: '',
      unique: true
    },
    type: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    remark: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    create_time: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      defaultValue: '0'
    },
    update_time: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      defaultValue: '0'
    },
    status: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sort: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'hdyy_config'
  });
};
