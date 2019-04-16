/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_ach_data', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    uid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    score: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fieldArr1: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fieldArr2: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_ach_data'
  });
};
