/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_question', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    number: {
      type: DataTypes.CHAR(14),
      allowNull: false
    },
    describe: {
      type: DataTypes.STRING(505),
      allowNull: false
    },
    question_class_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    priority_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    question_status_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    founder_user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    dispose_user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    audit_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    audit_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    assign_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    assign_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    read: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    back: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    accessory_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    device_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    question_reason_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    is_job: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_question'
  });
};
