/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_ach_tab', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    group: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    startTime: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    endTime: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_ach_tab'
  });
};
