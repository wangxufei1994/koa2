/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_demand_form_title_access', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    tid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_demand_form_title_access'
  });
};
