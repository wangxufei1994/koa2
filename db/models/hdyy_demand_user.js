/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_demand_user', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    demand_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    finish_rate: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    confirm_status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '2'
    },
    type: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_demand_user'
  });
};
