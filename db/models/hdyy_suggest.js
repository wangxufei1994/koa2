/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_suggest', {
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
    time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    user_status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    director_status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    complain_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    who_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    reply: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    reply_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    reply_user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    add_user_id: {
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
    tableName: 'hdyy_suggest'
  });
};
