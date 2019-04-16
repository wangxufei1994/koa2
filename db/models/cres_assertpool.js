/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cres_assertpool', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    platform_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    server_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    store_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    changer_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    line_time: {
      type: DataTypes.INTEGER(11),
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
    tableName: 'cres_assertpool'
  });
};
