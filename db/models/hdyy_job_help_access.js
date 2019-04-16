/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_job_help_access', {
    job_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    user_id: {
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
    tableName: 'hdyy_job_help_access'
  });
};
