/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_algorithm', {
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
    explain: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    formula_show: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    formula_hide: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rule_show: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rule_show_custom: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_algorithm'
  });
};
