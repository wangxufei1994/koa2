/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cres_interface', {
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
      allowNull: false,
      defaultValue: '1'
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'cres_interface'
  });
};
