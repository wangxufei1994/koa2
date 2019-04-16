/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_arrange_replace', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    old_user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    aid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    replace_time: {
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
    uid: {
      type: DataTypes.INTEGER(10),
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
    rid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_arrange_replace'
  });
};
