/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_venture_question', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    important_status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '2'
    },
    dimension_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    cycle_status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '2'
    },
    rate: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    answer_a: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    answer_a_until: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '1.00'
    },
    answer_b: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    answer_b_until: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    answer_c: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    answer_c_until: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    answer_d: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    answer_d_until: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    q_type: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '2'
    },
    status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_venture_question'
  });
};
