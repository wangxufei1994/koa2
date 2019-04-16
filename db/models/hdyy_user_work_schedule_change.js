/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_user_work_schedule_change', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    person_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    old_person_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    old_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    arrange_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    new_person_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    new_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    reason: {
      type: DataTypes.STRING(510),
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    origin: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_user_work_schedule_change'
  });
};
