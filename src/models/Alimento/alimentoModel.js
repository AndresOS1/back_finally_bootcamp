const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/connection");
const moment = require("moment-timezone");

class Alimentos extends Model {}

Alimentos.init(
  {
    id_alimentos: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_alimento: DataTypes.STRING,

    materia_seca: DataTypes.DECIMAL,
    e_m_aves: DataTypes.DECIMAL,
    e_m_cerdos: DataTypes.DECIMAL,
    proteina_cruda: DataTypes.DECIMAL,
    fibra_cruda: DataTypes.DECIMAL,
    ext_etereo: DataTypes.DECIMAL,
    calcio: DataTypes.DECIMAL,
    fosf_disp: DataTypes.DECIMAL,
    sodio: DataTypes.DECIMAL,
    arginina: DataTypes.DECIMAL,
    lisina: DataTypes.DECIMAL,
    metionina: DataTypes.DECIMAL,
    triptofano: DataTypes.DECIMAL,
    met_cis: DataTypes.DECIMAL,
    treonina: DataTypes.DECIMAL,
    tipo_nutriente_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    region_id: {
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
    modelName: "Alimento",
    tableName: "alimentos",
  }
);

module.exports = Alimentos;
