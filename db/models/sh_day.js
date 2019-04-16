/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sh_day', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    yangli: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    zangli: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    active: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'sh_day'
  });
};
