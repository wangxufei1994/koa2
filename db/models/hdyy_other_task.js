/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_other_task', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    need_number: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    demand_group_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    demand_work_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    number: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    describe: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    demand_class_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    demand_grade_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    task_status_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    dispose_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    cycle: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rate: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    start_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    finish_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    accessory_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    create_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    cycle_status: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    finish_rate: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    last_submit_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_other_task'
  });
};
