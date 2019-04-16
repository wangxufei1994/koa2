/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_job_evaluate', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    job_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      unique: true
    },
    evaluate_user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    evaluate: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_job_evaluate'
  });
};
