/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_superuser: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true
    },
    first_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    is_staff: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    is_active: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    date_joined: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'auth_user'
  });
};
