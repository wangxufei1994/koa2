/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_demand_confirm', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    demand_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    confirm_status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '2'
    }
  }, {
    tableName: 'hdyy_demand_confirm'
  });
};
