/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_polling_manage_form_device', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    device_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    form_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_polling_manage_form_device'
  });
};
