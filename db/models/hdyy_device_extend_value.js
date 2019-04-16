/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_device_extend_value', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    device_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    device_extend_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    value: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_device_extend_value'
  });
};
