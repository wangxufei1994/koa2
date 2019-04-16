/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_demand_form_title_dictionary', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    fid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    tid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    uid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    create_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_demand_form_title_dictionary'
  });
};
