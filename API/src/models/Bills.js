const { DataTypes, Model } = require("sequelize");

class Bills extends Model {
  static init(sequelize) {
    super.init(
      {
        type: DataTypes.STRING,
        month: DataTypes.INTEGER,
        value: DataTypes.INTEGER,
        paid: DataTypes.BOOLEAN,
        payment_date: DataTypes.DATE,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Bills;
