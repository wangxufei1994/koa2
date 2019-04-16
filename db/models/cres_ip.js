/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cres_ip', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ipAddr: {
      type: DataTypes.STRING(22),
      allowNull: false
    },
    macAddr: {
      type: DataTypes.STRING(42),
      allowNull: false
    },
    purpose: {
      type: DataTypes.STRING(42),
      allowNull: false
    },
    access_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'cres_ip'
  });
};
