const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/connection");
const moment = require("moment-timezone");

class Preparaciones extends Model {}

Preparaciones.init(
  {
    id_preparacion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cantidad_produccion: DataTypes.DECIMAL,
    precio_produccion: DataTypes.DECIMAL,
    usuario_id: DataTypes.BIGINT,
    requerimiento_animal_id: DataTypes.BIGINT,

    createdAt: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: moment.utc().format("YYYY-MM-DD HH:mm:ss"),
      field: "creado",
    },
    updatedAt: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: moment.utc().format("YYYY-MM-DD HH:mm:ss"),
      field: "actualizado",
    },
  },
  {
    sequelize,
    sequelize: sequelize,
    modelName: "Preparaciones",
    tableName: "preparaciones",
  }
);
module.exports = Preparaciones;
