/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_job_doctor_evaluate_access', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    job_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    doctor_evaluate_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    evaluate_list_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    evaluate_value: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_job_doctor_evaluate_access'
  });
};
