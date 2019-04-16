/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_demand_read', {
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
    create_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    read_status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_demand_read'
  });
};
