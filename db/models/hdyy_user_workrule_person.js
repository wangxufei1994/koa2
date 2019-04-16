/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_user_workrule_person', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    person_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    workrule_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    person_name: {
      type: DataTypes.STRING(22),
      allowNull: false
    },
    sort: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_user_workrule_person'
  });
};
