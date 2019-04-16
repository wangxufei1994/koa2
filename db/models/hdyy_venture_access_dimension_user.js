/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_venture_access_dimension_user', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ven_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    dispose_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    dimen_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_venture_access_dimension_user'
  });
};
