/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_demand_pay', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    money: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    rate: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    contract_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    remark: {
      type: DataTypes.STRING(505),
      allowNull: false
    },
    company_name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    accessory_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    demand_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_demand_pay'
  });
};
