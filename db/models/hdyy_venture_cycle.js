/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_venture_cycle', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    number: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    describe: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    start_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    finish_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_venture_cycle'
  });
};
