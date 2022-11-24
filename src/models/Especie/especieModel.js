const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/connection");
const moment = require("moment-timezone");

class Especie extends Model {}

Especie.init(
  {
    id_especie: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_especie: DataTypes.STRING,

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
    modelName: "Especie",
    tableName: "especies",
  }
);
module.exports = Especie;
