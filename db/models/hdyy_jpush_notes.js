/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_jpush_notes', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    create_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_jpush_notes'
  });
};
