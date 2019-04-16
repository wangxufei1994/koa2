/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_user_login', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    web_status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    uid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    login_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_user_login'
  });
};
