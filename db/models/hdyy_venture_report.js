/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hdyy_venture_report', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    result_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ven_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    access_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    dispose_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    not_submit_coun: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    all_satisfy_coun: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    part_satisfy_coun: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    not_satisfy_coun: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    other_satisfy_count: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hdyy_venture_report'
  });
};
