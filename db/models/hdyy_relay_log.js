/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_relay_log', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    reply_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    relay_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    relayed_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    job_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_relay_log'
  });
};
