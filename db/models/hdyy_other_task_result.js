/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_other_task_result', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    task_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    start_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    cycle_status: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    accessory_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    log_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    finish_rate: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_other_task_result'
  });
};
