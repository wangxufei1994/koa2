/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_provider', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    describe: {
      type: DataTypes.STRING(502),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    product: {
      type: DataTypes.STRING(102),
      allowNull: false
    },
    customer: {
      type: DataTypes.STRING(102),
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
    tableName: 'hdyy_provider'
  });
};
