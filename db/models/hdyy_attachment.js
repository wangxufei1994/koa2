/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_attachment', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    unit: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    brand: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    standard: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    version: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    remark: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_attachment'
  });
};
