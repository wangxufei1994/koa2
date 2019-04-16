/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_user_model', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(110),
      allowNull: false
    },
    is_default: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    sort: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    need: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    java_regex: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    js_regex: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    tip: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    holder: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_user_model'
  });
};
