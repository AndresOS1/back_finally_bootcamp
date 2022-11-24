const { DataTypes, Model } = require("sequelize");

const sequelize = require("../../config/connection");
const moment = require("moment-timezone");

class RequerimientosAnimales extends Model {}

RequerimientosAnimales.init(
  {
    id_requerimiento_animal: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_fase: DataTypes.STRING,
    m_s: DataTypes.DECIMAL,
    e_m_ave: DataTypes.DECIMAL,
    e_d_cerdo: DataTypes.DECIMAL,
    proteina: DataTypes.DECIMAL,
    fibra_cruda: DataTypes.DECIMAL,
    ext_etereo: DataTypes.DECIMAL,
    calcio: DataTypes.DECIMAL,
    fosf_disp: DataTypes.DECIMAL,
    sodio: DataTypes.DECIMAL,
    arginina: DataTypes.DECIMAL,
    lisina: DataTypes.DECIMAL,
    metionina: DataTypes.DECIMAL,
    met_cis: DataTypes.DECIMAL,
    treonina: DataTypes.DECIMAL,
    triptofano: DataTypes.DECIMAL,
    ceniza: DataTypes.DECIMAL,
    especie_id: DataTypes.INTEGER,
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
    modelName: "RequerimientosAnimales",
    tableName: "requerimientos_animales",
  }
);
module.exports = RequerimientosAnimales;
