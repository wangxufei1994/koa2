/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_idcard', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    sex: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    nation: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    birthday: {
      type: DataTypes.INTEGER(9),
      allowNull: false
    },
    accessory_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    idcard: {
      type: DataTypes.STRING(18),
      allowNull: false
    },
    uid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_idcard'
  });
};
