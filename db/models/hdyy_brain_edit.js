/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_brain_edit', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rid: {
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
    old_aid: {
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
    new_aid: {
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
    auto_uid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    auto_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    auto_status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(82),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_brain_edit'
  });
};
