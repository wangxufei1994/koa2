/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(22),
      allowNull: false
    },
    password: {
      type: DataTypes.CHAR(32),
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
    email: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    job_number: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    organ_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    duty: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    serve_deal: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    serve_deadline: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    accessory_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    spell: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    reg_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    reg_ip: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    login: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    last_login_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    open_vitil: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0'
    },
    cue_pic_status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0'
    },
    last_login_ip: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_user'
  });
};
