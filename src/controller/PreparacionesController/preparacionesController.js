const estructuraApi = require("../../helpers/estructuraApi");
const Preparacion = require("../../models/Preparacion/preparacionModel");
const asociations = require("../../models/asociations");
const modeluser = require("../../models/Usuario/UsuarioModel");
const modelanimals = require("../../models/RequerimientoAnimal/requerimientoAnimalModel");

var requestPreparacion = require("../../models/DTO/PreparacionDTO");
const { Pool } = require("pg");
const db = require("../../../env");

const pool = new Pool(db);

exports.allPreparaciones = async (req, res) => {
  let estructuraapi = new estructuraApi();

  let preparaciones = await Preparacion.findAll();
  if (preparaciones.length > 0) {
    estructuraapi.setResultado(preparaciones);
  } else {
    estructuraapi.setEstado(404, "error", "No hay Preparaciones Resgistradas");
  }
  res.json(estructuraapi.toResponse());
};

exports.viewPreparacion = async (req, res) => {
  let estructuraapi = new estructuraApi();
  const id_preparacion = req.params.id_preparacion;
  const preparacion = await Preparacion.findOne({
    where: { id_preparacion: id_preparacion },
  });
  if (preparacion) {
    estructuraapi.setResultado(preparacion);
  } else {
    estructuraapi.setEstado(404, "error", "Preparacion no encontrada");
  }
  res.json(estructuraapi.toResponse());
};

exports.createPreparacion = async (req, res) => {
  let estructuraapi = new estructuraApi();

  requestPreparacion = req.body;

  let newPreparacion = await Preparacion.create(requestPreparacion);

  if (newPreparacion) {
    estructuraapi.setResultado(newPreparacion);
    // api.setEstado("success", "success", "se ")
  } else {
    estructuraapi.setEstado(
      error.parent.code || 402,
      "error",
      "Error al registrar la Preparacion"
    );
  }

  res.json(estructuraapi.toResponse());
};

exports.updatePreparacion = async (req, res) => {
  let estructuraapi = new estructuraApi();

  const id_preparacion = req.params.id_preparacion;

  requestPreparacion = req.body;

  let preparacion = await Preparacion.findOne({
    where: {
      id_preparacion: id_preparacion,
    },
  });

  if (preparacion) {
    let updatePreparacion = preparacion.update(requestPreparacion);
    if (!updatePreparacion) {
      estructuraapi.setEstado(204, "Error", "Error Inesperado");
    }
  } else {
    estructuraapi.setEstado(204, "Not Found", "No existe esta Preparacion");
  }

  res.json(estructuraapi.toResponse());
};

exports.deletePreparacion = async (req, res) => {
  let estructuraapi = new estructuraApi();

  const id_preparacion = req.params.id_preparacion;

  const preparacion = await Preparacion.findOne({
    where: { id_preparacion: id_preparacion },
  });

  if (preparacion) {
    preparacion.destroy();
  } else {
    estructuraapi.setEstado("INFO", "info", `Preparacion no Encontrada!`);
  }
  res.json(estructuraapi.toResponse());
};

exports.getPreparationByIdUser = async (req , res) => {
  let api = new estructuraApi();

  const {usuario_id} = req.params;

  const preparacion = await Preparacion.findOne({include : [modelanimals , modeluser] },
    {where: { usuario_id }});

  if (preparacion) {
    api.setResultado(preparacion)
  } else {
    api.setEstado("INFO", "info", `Preparacion no Encontrada!`);
  }
  res.json(api.toResponse());
}
