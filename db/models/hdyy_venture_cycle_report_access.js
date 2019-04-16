/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_venture_cycle_report_access', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    report_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    q_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    q_key: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_venture_cycle_report_access'
  });
};
