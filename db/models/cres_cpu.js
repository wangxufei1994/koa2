/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cres_cpu', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    model: {
      type: DataTypes.STRING(42),
      allowNull: false
    },
    rate: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    number: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    access_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'cres_cpu'
  });
};
