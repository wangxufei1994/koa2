/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cres_polling_manage_result_notes', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    did: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    create_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0'
    },
    start_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    finish_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    device_type: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    }
  }, {
    tableName: 'cres_polling_manage_result_notes'
  });
};
