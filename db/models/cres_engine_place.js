/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cres_engine_place', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    back_type: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    engine_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    air_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    battery_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cabinet_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    door_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    window_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    environment_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fire_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lightning_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lock_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    power_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ups_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    video_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    wind_ids: {
      type: DataTypes.TEXT,
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
    tableName: 'cres_engine_place'
  });
};
