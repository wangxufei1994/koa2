/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_service_deal', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    describe: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    value: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_service_deal'
  });
};
