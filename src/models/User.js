const { Model, DataTypes } = require('sequelize');

class User extends Model {
  // sequelize as parameter equals connection
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = User;
