/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('django_content_type', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    app_label: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    model: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'django_content_type'
  });
};
