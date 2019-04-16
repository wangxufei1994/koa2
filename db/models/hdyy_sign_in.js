/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_sign_in', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    openid: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    sign_in_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    unsign_in_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'hdyy_sign_in'
  });
};
