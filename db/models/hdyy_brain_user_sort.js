/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_brain_user_sort', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    uid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    gid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    sort: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_brain_user_sort'
  });
};
