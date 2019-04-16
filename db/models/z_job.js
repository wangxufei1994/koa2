/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('z_job', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    number: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    user_id_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    describe: {
      type: DataTypes.STRING(550),
      allowNull: false
    },
    explain: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    affect_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    risk_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    priority_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    job_class_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    job_class_id_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fault_class_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    fault_class_id_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fault_phenomenon_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    fault_phenomenon_id_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    service_deal_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    service_deal_id_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    origin_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    founder_user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    founder_user_id_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    dispose_user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    dispose_user_id_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    assign_user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    assign_user_id_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    explains: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    job_status_id: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    register_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    organ_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    organ_id_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    doctor_evaluate_status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    director_evaluate_status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    complain_status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    process_mode: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    fast: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'z_job'
  });
};
