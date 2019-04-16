/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_permission', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    content_type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'django_content_type',
        key: 'id'
      }
    },
    codename: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'auth_permission'
  });
};
