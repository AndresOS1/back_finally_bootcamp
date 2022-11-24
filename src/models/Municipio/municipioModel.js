const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/connection");
const moment = require("moment-timezone");

class Municipio extends Model {}

Municipio.init(
  {
    id_municipio: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    nombre_municipio: DataTypes.STRING,

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
    modelName: "Municipio",
    tableName: "municipios",
  }
);

module.exports = Municipio;
