/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_demand', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    need_number: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    need_number_up: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ''
    },
    demand_work_id: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    number: {
      type: DataTypes.CHAR(14),
      allowNull: false
    },
    number_info: {
      type: DataTypes.STRING(14),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(22),
      allowNull: false
    },
    describe: {
      type: DataTypes.STRING(510),
      allowNull: false
    },
    demand_class_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    demand_grade_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    create_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    accessory_ids: {
      type: DataTypes.TEXT,
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
    practice_start_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    practice_finish_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    uid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    pid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    remark: {
      type: DataTypes.STRING(510),
      allowNull: false
    },
    finish_rate: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    stop_status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '1'
    },
    stop_reason: {
      type: DataTypes.STRING(510),
      allowNull: false
    },
    lost_status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '1'
    },
    lost_reason: {
      type: DataTypes.STRING(510),
      allowNull: false
    },
    suspend_status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '1'
    },
    suspend_reason: {
      type: DataTypes.STRING(510),
      allowNull: false
    },
    stage: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '1'
    },
    mark: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    weight: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    last_submit_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    public_status: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    postil: {
      type: DataTypes.STRING(510),
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '2'
    },
    person_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '1'
    },
    form_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'hdyy_demand'
  });
};
