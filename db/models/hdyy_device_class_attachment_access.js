/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_device_class_attachment_access', {
    device_class_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    attachment_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'hdyy_device_class_attachment_access'
  });
};
