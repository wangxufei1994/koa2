/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_auth_group', {
    id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      defaultValue: ''
    },
    describe: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    crules: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rules: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'hdyy_auth_group'
  });
};
