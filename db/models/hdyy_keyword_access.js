/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_keyword_access', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    keyword_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '1'
    },
    access_table: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '1'
    },
    access_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_keyword_access'
  });
};
