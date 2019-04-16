/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cres_router', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    number: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    facilitator_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    master_type: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    brand: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    manage_addr: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    backband_size: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    backband_unit: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    buy_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    main_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    power_number: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    power_type: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    ability: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    ability_unit: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    cabinet_id: {
      type: DataTypes.INTEGER(10),
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
    tableName: 'cres_router'
  });
};
