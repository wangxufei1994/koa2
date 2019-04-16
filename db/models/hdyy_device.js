/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_device', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    number: {
      type: DataTypes.STRING(14),
      allowNull: false,
      unique: true
    },
    organ_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    principal: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    facilitator_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    serve_deadline: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    device_status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_device'
  });
};
