/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_qrcode', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    url: {
      type: DataTypes.STRING(225),
      allowNull: false,
      unique: true
    },
    ticket: {
      type: DataTypes.STRING(225),
      allowNull: false,
      unique: true
    },
    scene: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      unique: true
    },
    time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'hdyy_qrcode'
  });
};
