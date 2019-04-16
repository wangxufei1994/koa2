/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_arrange_order_access', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    oid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    aid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    gid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    access_aid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    condition: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    rate: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_arrange_order_access'
  });
};
