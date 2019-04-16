/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_user_workrule', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(22),
      allowNull: false
    },
    arrange_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    person: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rate: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    rule_sort: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    auto: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    cycle: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    number: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    col: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER(10),
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
    tableName: 'hdyy_user_workrule'
  });
};
