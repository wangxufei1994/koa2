/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_provider_link', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    linkman: {
      type: DataTypes.STRING(22),
      allowNull: false
    },
    duty: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    tel: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    wchat: {
      type: DataTypes.STRING(42),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(52),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_provider_link'
  });
};
