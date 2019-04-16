/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cres_applyassert', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(42),
      allowNull: false
    },
    child_name: {
      type: DataTypes.STRING(42),
      allowNull: false
    },
    ip: {
      type: DataTypes.STRING(42),
      allowNull: false
    },
    other_ip: {
      type: DataTypes.STRING(42),
      allowNull: false
    },
    system_version: {
      type: DataTypes.STRING(42),
      allowNull: false
    },
    line_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    ap_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    facilitator_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    remark: {
      type: DataTypes.STRING(102),
      allowNull: false
    },
    create_time: {
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
    tableName: 'cres_applyassert'
  });
};
