const { DataTypes, Model } = require("sequelize");

const sequelize = require("../../config/connection");
const moment = require("moment-timezone");

class PreparacionesAlimentos extends Model {}

PreparacionesAlimentos.init(
  {
    id_preparacion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cantidad_alimento: DataTypes.DECIMAL,
    precio_alimento: DataTypes.DECIMAL,
    preparacion_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      alimento_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },    
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
    modelName: "PreparacionesAlimentos",
    tableName: "preparaciones_alimentos",
  }
);
module.exports = PreparacionesAlimentos;
