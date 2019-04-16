/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_login_log', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    login_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    login_ip: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    browser: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    optionSys: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'hdyy_login_log'
  });
};
