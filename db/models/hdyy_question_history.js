/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_question_history', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    question_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_question_history'
  });
};
