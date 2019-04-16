/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_job_director_evaluate_access', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    job_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    director_evaluate_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    evaluate_list_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    evaluate_value: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_job_director_evaluate_access'
  });
};
