/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_menu', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    pid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    icon: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    sort: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    url: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: ''
    },
    iurl: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: ''
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_menu'
  });
};
