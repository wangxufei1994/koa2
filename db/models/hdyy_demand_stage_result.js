/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_demand_stage_result', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    stage_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    demand_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    over_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    accessory_ids: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '1'
    },
    director_status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0'
    },
    reply: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    reply_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    reply_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    version: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '1.0'
    },
    bak_accessory_ids: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    urgent_stage_accessory_ids: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    back_stage_accessory_ids: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lines_stage_accessory_ids: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'hdyy_demand_stage_result'
  });
};
