const { DataTypes, Model } = require("sequelize");

class Banks extends Model {
  static init(sequelize) {
    super.init(
      {
        bank_name: DataTypes.STRING,
        month: DataTypes.INTEGER,
        limit: DataTypes.INTEGER,
        debt: DataTypes.INTEGER,
        status: DataTypes.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Banks;
