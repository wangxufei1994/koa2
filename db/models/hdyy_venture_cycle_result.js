/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_venture_cycle_result', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    access_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ven_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    finish_status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '1'
    },
    start_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    finish_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    out_status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '2'
    },
    look_status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '1'
    },
    time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_venture_cycle_result'
  });
};
