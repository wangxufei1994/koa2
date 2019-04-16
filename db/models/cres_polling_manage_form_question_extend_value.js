/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cres_polling_manage_form_question_extend_value', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    q_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    extend_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    value: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    start_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    finish_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    fid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    pid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    uid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    did: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    create_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    }
  }, {
    tableName: 'cres_polling_manage_form_question_extend_value'
  });
};
