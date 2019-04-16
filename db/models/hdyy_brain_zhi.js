/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_brain_zhi', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    aid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    gid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    oid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    zid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    uid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(52),
      allowNull: false
    },
    importent: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    access: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_brain_zhi'
  });
};
