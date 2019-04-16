/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_user_model_class_value', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    access_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    model_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    user_class_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    model_class_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    person_id: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    value: {
      type: DataTypes.STRING(550),
      allowNull: false
    },
    remark: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_user_model_class_value'
  });
};
