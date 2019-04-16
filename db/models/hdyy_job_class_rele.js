/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_job_class_rele', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    job_class_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      unique: true
    },
    priority_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    dispose_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    service_deal_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_job_class_rele'
  });
};
