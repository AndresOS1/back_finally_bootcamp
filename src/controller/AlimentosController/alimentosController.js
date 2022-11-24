const estructuraApi = require("../../helpers/estructuraApi");
const Alimento = require("../../models/Alimento/alimentoModel");
const Region = require("../../models/Region/regionModel");
const TipoNutriente = require("../../models/TipoNutriente/tipoNutrienteModel");

var requestAlimentos = require("../../models/DTO/AlimentosRequest");
const { Pool } = require("pg");
const db = require("../../../env");
const { json } = require("sequelize");

const pool = new Pool(db);

exports.allAliments = async (req, res) => {
  let estructuraapi = new estructuraApi();

  let alimentos = await Alimento.findAll({
    include: [Region, TipoNutriente],
  });
  if (alimentos.length > 0) {
    estructuraapi.setResultado(alimentos);
  } else {
    estructuraapi.setEstado(404, "error", "No hay alimentos Resgistrados");
  }
  res.json(estructuraapi.toResponse());
};

exports.AlimentsForSite = async (req, res) => {
  let estructuraapi = new estructuraApi();
  const region_id = req.params.region_id;
  const alimentosPorRegion = await pool.query(`SELECT 
    nombre_alimento
    FROM alimentos
    JOIN regiones
    ON regiones.id_region = alimentos.region_id
    WHERE alimentos.region_id = ${region_id}`);
  // console.log(asignaciones.rows);
  if (alimentosPorRegion.rows.length > 0) {
    estructuraapi.setResultado(alimentosPorRegion.rows);
  } else {
    estructuraapi.setEstado(404, "error", "No encontrado!");
  }
  res.json(estructuraapi.toResponse());
};

exports.viewAliment = async (req, res) => {
  let estructuraapi = new estructuraApi();
  const id_alimentos = req.params.id_alimentos;
  const alimento = await Alimento.findOne({
    where: { id_alimentos: id_alimentos },
  });
  if (alimento) {
    estructuraapi.setResultado(alimento);
  } else {
    estructuraapi.setEstado(404, "error", "Alimento no encontrado");
  }
  res.json(estructuraapi.toResponse());
};

exports.createAliment = async (req, res) => {
  let estructuraapi = new estructuraApi();

  requestAlimentos = req.body;

  await Alimento.create(requestAlimentos)
    .then((succes) => {
      estructuraapi.setResultado(succes);
    })
    .catch((error) => {
      estructuraapi.setEstado(
        error.parent.code || error,
        "Error al registrar el Alimento",
        error.parent.detail || error
      );
    });

  res.json(estructuraapi.toResponse());
};

exports.updateAliment = async (req, res) => {
  let estructuraapi = new estructuraApi();

  const id_alimentos = req.params.id_alimentos;

  requestAlimentos = req.body;

  let alimento = await Alimento.findOne({
    where: {
      id_alimentos: id_alimentos,
    },
  });

  if (alimento) {
    let updateAliment = alimento.update(requestAlimentos);
    if (!updateAliment) {
      estructuraapi.setEstado(204, "Error", "Error Inesperado");
    }
  } else {
    estructuraapi.setEstado(204, "Not Found", "No existe este Alimento");
  }

  res.json(estructuraapi.toResponse());
};

exports.deleteAliment = async (req, res) => {
  let estructuraapi = new estructuraApi();

  const id_alimentos = req.params.id_alimentos;

  const alimento = await Alimento.findOne({
    where: { id_alimentos: id_alimentos },
  });

  if (alimento) {
    alimento.destroy();
  } else {
    estructuraapi.setEstado("INFO", "info", `Alimento no Encontrado!`);
  }
  res.json(estructuraapi.toResponse());
};

exports.AlimentosbyRegionAndNutriente = async (req, res) => {
  const api = new estructuraApi

  const {id_nutriente , id_region} = req.body;

   const alimentos  = await Alimento.findAll()

  const alimetosfiltrados = alimentos.filter(data => data.region_id == id_region && data.tipo_nutriente_id == id_nutriente )

  alimetosfiltrados == null || alimetosfiltrados == ""  ?
  api.setEstado(204, "empty" , "no se encuentran alimentos ") : 
  api.setResultado(alimetosfiltrados)

  res.json(api.toResponse())

   
}
