/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_duty_version', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(22),
      allowNull: false
    },
    duty_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    start: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    fid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_duty_version'
  });
};
