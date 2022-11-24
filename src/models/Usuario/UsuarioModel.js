const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/connection");
const moment = require("moment-timezone");

class User extends Model {}

User.init(
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    contrasena: DataTypes.STRING,
    nombres: DataTypes.STRING,
    correo: DataTypes.STRING,
    celular: DataTypes.STRING,
    identificacion: DataTypes.STRING,
    ubicacion: DataTypes.STRING,
    foto: DataTypes.STRING,
    tipo_usuario: DataTypes.STRING,
    region_id: DataTypes.STRING,
    createdAt: {
      type: DataTypes.NOW,
      allowNull: false,
      defaultValue: moment.utc().format("YYYY-MM-DD HH:mm:ss"),
      field: "creado",
    },
    updatedAt: {
      type: DataTypes.NOW,
      allowNull: false,
      defaultValue: moment.utc().format("YYYY-MM-DD HH:mm:ss"),
      field: "actualizado",
    },
  },
  {
    sequelize,
    sequelize: sequelize,
    modelName: "User",
    tableName: "usuarios",
  }
);

module.exports = User;
