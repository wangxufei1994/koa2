/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_service_beg', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    number: {
      type: DataTypes.CHAR(14),
      allowNull: false,
      unique: true
    },
    beg_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    beg_status_id: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    beg_user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    accepted_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    finish_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    mobile_phone: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    office_phone: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    contact: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    organ: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_service_beg'
  });
};
