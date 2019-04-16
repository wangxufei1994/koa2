/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_common_fault', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    describe: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    job_class_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    priority_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    service_deal_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    job_reason_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    reason_describe: {
      type: DataTypes.STRING(510),
      allowNull: false
    },
    view: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    scheme: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_common_fault'
  });
};
