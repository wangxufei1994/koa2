/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cres_menu', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    pid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    icon: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    sort: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'cres_menu'
  });
};
