/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_card', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    accessory_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    company_name: {
      type: DataTypes.STRING(22),
      allowNull: false
    },
    link_name: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    duty: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    office_phone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    mobile_phone: {
      type: DataTypes.STRING(13),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    hot_tel: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    share: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    target_ids: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '0'
    },
    remark: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    uid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'hdyy_card'
  });
};
