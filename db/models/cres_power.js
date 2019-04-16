/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cres_power', {
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
    power_brand: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    switch_brand: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    total_power: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    line_length: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    power_type: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    rate_capacity: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    use_capacity: {
      type: DataTypes.INTEGER(10),
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
    engine_id: {
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
    tableName: 'cres_power'
  });
};
