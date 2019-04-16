/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cres_polling_manage_arrange', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    create_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    setting_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'cres_polling_manage_arrange'
  });
};
