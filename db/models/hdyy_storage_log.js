/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_storage_log', {
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
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    remark: {
      type: DataTypes.STRING(30),
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
    tableName: 'hdyy_storage_log'
  });
};
