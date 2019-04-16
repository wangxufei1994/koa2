/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_auth_group_access', {
    uid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    group_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'hdyy_auth_group_access'
  });
};
