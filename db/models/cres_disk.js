/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cres_disk', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    kind: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    bare_size: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    bare_size_unit: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    one_size: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    one_size_unit: {
      type: DataTypes.INTEGER(1),
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
    copy_type: {
      type: DataTypes.INTEGER(1),
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
    tableName: 'cres_disk'
  });
};
