/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_polling_manage_device', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    did: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_polling_manage_device'
  });
};
