/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cres_polling_manage_form_question', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    need: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    sort: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    }
  }, {
    tableName: 'cres_polling_manage_form_question'
  });
};
