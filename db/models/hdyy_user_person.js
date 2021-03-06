/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_user_person', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    user_class_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_user_person'
  });
};
