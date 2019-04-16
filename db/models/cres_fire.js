/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cres_fire', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    engine_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    brand: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    facilitator_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    test_company: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    air_name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    air_weight: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    test_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    test_result: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    x: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    y: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    l: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    h: {
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
    tableName: 'cres_fire'
  });
};
