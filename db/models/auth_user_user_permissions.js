/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_user_user_permissions', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'auth_user',
        key: 'id'
      }
    },
    permission_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'auth_permission',
        key: 'id'
      }
    }
  }, {
    tableName: 'auth_user_user_permissions'
  });
};
