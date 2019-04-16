/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_arrange', {
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
    work_begin_time: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    work_end_time: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    tomorrow: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    rest_begin_time: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    rest_end_time: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    user_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sort: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(202),
      allowNull: false
    },
    begin_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    end_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    cycle: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    rate: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    jump: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    interval: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    rest: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    uid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    create_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_arrange'
  });
};
