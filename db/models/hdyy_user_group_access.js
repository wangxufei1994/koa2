/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_user_group_access', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    group_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_user_group_access'
  });
};
