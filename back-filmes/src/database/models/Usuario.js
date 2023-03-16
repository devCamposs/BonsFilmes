const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "Usuario",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        notNull: true,
      },
      name: {
        type: DataTypes.STRING,
        notNull: true,
      },
      email: {
        type: DataTypes.STRING,
        notNull: true,
      },
      password: {
        type: DataTypes.STRING,
        notNull: true,
      }
    },
    {
      tableName: "users",
      underscored: true,
      timestamps: false,
    }
  );

  return Usuario;
};
