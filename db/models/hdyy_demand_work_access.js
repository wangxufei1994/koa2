/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_demand_work_access', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    wid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    did: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    ip: {
      type: DataTypes.STRING(52),
      allowNull: false
    },
    system: {
      type: DataTypes.STRING(52),
      allowNull: false
    },
    uid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_demand_work_access'
  });
};
