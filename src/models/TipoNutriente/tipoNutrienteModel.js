const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/connection");
const moment = require("moment-timezone");

class tiponutrientes extends Model {}

tiponutrientes.init(
  {
    id_tipo_nutriente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_tipo_nutriente: DataTypes.STRING,

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
    modelName: "tiponutrientes",
    tableName: "tipos_nutrientes",
  }
);

module.exports = tiponutrientes;
