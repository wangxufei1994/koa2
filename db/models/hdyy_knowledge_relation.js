/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_knowledge_relation', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    relation_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    k_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_knowledge_relation'
  });
};
