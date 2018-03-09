'use strict';
module.exports = (sequelize, DataTypes) => {
  var account = sequelize.define('account', {
    account_balance: DataTypes.INTEGER,
    account_nickname: DataTypes.STRING
  });

  account.associate = (models) => {
    account.belongsTo(models.users);
  }
  return account;
};