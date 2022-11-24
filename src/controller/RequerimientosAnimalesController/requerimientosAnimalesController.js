const estructuraApi = require("../../helpers/estructuraApi");
const RequerimientosAnimales= require('../../models/RequerimientoAnimal/requerimientoAnimalModel')

var requestRequerimientoAnimales = require("../../models/DTO/requerimientos_animales");
const { Pool } = require("pg");
const db = require("../../../env");

const pool = new Pool(db);

exports.allReqAliments = async (req, res) => {
  let estructuraapi = new estructuraApi();

  let reqAliments = await RequerimientosAnimales.findAll();
  if (reqAliments.length > 0) {
    estructuraapi.setResultado(reqAliments);
  } else {
    estructuraapi.setEstado(404, "error", "No hay requeremientos de animales Resgistrados");
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
  console.log(requestAlimentos);

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

exports.updateAssignment = async (req, res) => {
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

exports.deleteAssignment = async (req, res) => {
  let estructuraapi = new estructuraApi();

  const id_alimentos = req.params.id_alimentos;

  const alimento = await Alimento.findOne({
    where: { id_alimentos: id_alimentos },
  });

  if (alimento) {
    alimento.destroy();
  } else {
    api.setEstado("INFO", "info", `Alimento no Encontrado!`);
  }
  res.json(estructuraapi.toResponse());
};
