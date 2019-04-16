/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_arrange_change', {
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
    user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    old_user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    old_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    old_rid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    aid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    new_user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    new_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    new_rid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    reason: {
      type: DataTypes.STRING(510),
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    origin: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    audit_user: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    audit_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_arrange_change'
  });
};
