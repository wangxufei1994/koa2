/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cres_lock_log_info', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    log_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    remark: {
      type: DataTypes.STRING(505),
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
    enter_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    reason: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    tip: {
      type: DataTypes.STRING(105),
      allowNull: false
    },
    number: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    person_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    agent: {
      type: DataTypes.STRING(105),
      allowNull: false
    },
    new_agent: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    new_link: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    new_tel: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    enter_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'cres_lock_log_info'
  });
};
