/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_demand_stage_access', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    vid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    did: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(52),
      allowNull: false
    },
    value: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    start_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    finish_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    remark: {
      type: DataTypes.STRING(102),
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    cycle: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    uid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    create_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_demand_stage_access'
  });
};
