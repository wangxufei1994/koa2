/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_app_index_order', {
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
    complain: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    director_evaluate_job: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    demand: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    not_finish_polling: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    not_finish_Job: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    device: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    statement: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    question: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    my_knowlodge: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    polling_selftest: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    start_venture: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    dispose_demand: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    polling_report: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    }
  }, {
    tableName: 'hdyy_app_index_order'
  });
};
