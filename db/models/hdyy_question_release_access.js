/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_question_release_access', {
    question_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    release_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    access_time: {
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
    tableName: 'hdyy_question_release_access'
  });
};
