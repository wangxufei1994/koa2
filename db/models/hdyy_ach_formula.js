/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_ach_formula', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mean: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    formula: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_ach_formula'
  });
};
