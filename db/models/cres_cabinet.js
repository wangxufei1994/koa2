/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cres_cabinet', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    engine_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    model_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    number: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    create_time: {
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
    uid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'cres_cabinet'
  });
};
