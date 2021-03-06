/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_question_job_access', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    job_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    question_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    uid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_question_job_access'
  });
};
