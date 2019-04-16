/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_pages', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pageing: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'hdyy_pages'
  });
};
