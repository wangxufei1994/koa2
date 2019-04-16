/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_output_log', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    attachment_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    job_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    organ_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    systems_user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_output_log'
  });
};
