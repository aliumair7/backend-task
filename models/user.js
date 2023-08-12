"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize.literal("gen_random_uuid()"),
        unique: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
      },

      password: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      modelName: "user",
    }
  );
  return User;
};
