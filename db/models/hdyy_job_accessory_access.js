/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_job_accessory_access', {
    job_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    accessory_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'hdyy_job_accessory_access'
  });
};
