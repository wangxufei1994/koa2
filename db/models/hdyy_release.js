/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_release', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    request_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    change_nums: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    describe: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    change_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    effect: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    risk: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    priority: {
      type: DataTypes.INTEGER(2).UNSIGNED.ZEROFILL,
      allowNull: false
    },
    correlation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    attachment: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    create_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    send_uid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    complete_uid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    remarks: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'hdyy_release'
  });
};
