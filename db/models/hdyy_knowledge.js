/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_knowledge', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    know_num: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    know_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    know_type: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    know_outline: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    create_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    view: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    know_orgin: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    organ_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '2'
    },
    describe: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'hdyy_knowledge'
  });
};
