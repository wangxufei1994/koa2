/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_demand_stop', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    f_demand_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    s_demand_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_demand_stop'
  });
};
