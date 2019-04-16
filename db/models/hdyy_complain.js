/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_complain', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    job_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
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
    organ_id: {
      type: DataTypes.INTEGER(30),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_complain'
  });
};
