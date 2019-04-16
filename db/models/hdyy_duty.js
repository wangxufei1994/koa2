/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_duty', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(22),
      allowNull: false
    },
    plan_number: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    practical_number: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    direct_name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    under_name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    limit_area: {
      type: DataTypes.STRING(110),
      allowNull: false
    },
    duty: {
      type: DataTypes.STRING(1050),
      allowNull: false
    },
    duty_require: {
      type: DataTypes.STRING(1050),
      allowNull: false
    },
    work_help: {
      type: DataTypes.STRING(1050),
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
    tableName: 'hdyy_duty'
  });
};
