/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('z_job_scheme', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    job_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    job_reason_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    job_reason_id_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    scheme: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    reason_describe: {
      type: DataTypes.STRING(501),
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
    tableName: 'z_job_scheme'
  });
};
