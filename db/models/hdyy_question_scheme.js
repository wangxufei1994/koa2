/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_question_scheme', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    question_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    analyze: {
      type: DataTypes.STRING(1005),
      allowNull: false
    },
    scheme: {
      type: DataTypes.STRING(1005),
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    accessory_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    remark: {
      type: DataTypes.STRING(505),
      allowNull: false
    },
    uid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_question_scheme'
  });
};
