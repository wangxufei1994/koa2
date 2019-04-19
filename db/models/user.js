/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sex: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
      defaultValue: '1'
    },
    school: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'user'
  });
};
