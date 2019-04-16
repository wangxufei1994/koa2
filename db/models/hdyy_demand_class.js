/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_demand_class', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    number_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    number_other: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_demand_class'
  });
};
