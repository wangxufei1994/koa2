/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_venture_result_note', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    res_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    access_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    q_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    choice_key: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    choice: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dimen_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ven_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'hdyy_venture_result_note'
  });
};
