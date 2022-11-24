const estructuraApi = require("../../helpers/estructuraApi");
const PreparacionAlimento = require("../../models/PreparacionAlimento/preparacionAnimalModel");
const asociations = require("../../models/asociations");

var requestPreparacionAlimento = require("../../models/DTO/PreparacionAlimentoDTO");
const { Pool } = require("pg");
const db = require("../../../env");

const pool = new Pool(db);

exports.allPreparacionesAlimentos = async (req, res) => {
  let estructuraapi = new estructuraApi();

  let preparacionesAlimentos = await PreparacionAlimento.findAll();
  if (preparacionesAlimentos.length > 0) {
    estructuraapi.setResultado(preparacionesAlimentos);
  } else {
    estructuraapi.setEstado(
      404,
      "error",
      "No hay Preparaciones de Alimentos Resgistradas"
    );
  }
  res.json(estructuraapi.toResponse());
};

exports.viewPreparacionAlimentos = async (req, res) => {
  let estructuraapi = new estructuraApi();
  const id_preparacion = req.params.id_preparacion;
  const preparacionAlimento = await PreparacionAlimento.findOne({
    where: { id_preparacion: id_preparacion },
  });
  if (preparacionAlimento) {
    estructuraapi.setResultado(preparacionAlimento);
  } else {
    estructuraapi.setEstado(
      404,
      "error",
      "Preparacion de Alimentos no encontrada"
    );
  }
  res.json(estructuraapi.toResponse());
};

exports.createPreparacionAlimentos = async (req, res) => {
  let estructuraapi = new estructuraApi();

  requestPreparacionAlimento = req.body;

  let newPreparacionAlimentos = await PreparacionAlimento.create(
    requestPreparacionAlimento
  );

  if (newPreparacionAlimentos) {
    estructuraapi.setResultado(newPreparacionAlimentos);
  } else {
    estructuraapi.setEstado(
      error.parent.code || 402,
      "error",
      "Error al registrar la Preparacion de Alimento"
    );
  }

  res.json(estructuraapi.toResponse());
};

exports.updatePreparacionAlimento = async (req, res) => {
  let estructuraapi = new estructuraApi();

  const id_preparacion = req.params.id_preparacion;

  requestPreparacionAlimento = req.body;

  let preparacionAlimento = await PreparacionAlimento.findOne({
    where: {
      id_preparacion: id_preparacion,
    },
  });

  if (preparacionAlimento) {
    let updatePreparacionAlimento = preparacionAlimento.update(
      requestPreparacionAlimento
    );
    if (!updatePreparacionAlimento) {
      estructuraapi.setEstado(204, "Error", "Error Inesperado");
    }
  } else {
    estructuraapi.setEstado(204, "Not Found", "No existe esta Preparacion");
  }

  res.json(estructuraapi.toResponse());
};

exports.deletePreparacionAlimentos = async (req, res) => {
  let estructuraapi = new estructuraApi();

  const id_preparacion = req.params.id_preparacion;

  const preparacionAlimento = await PreparacionAlimento.findOne({
    where: { id_preparacion: id_preparacion },
  });

  if (preparacionAlimento) {
    preparacionAlimento.destroy();
  } else {
    api.setEstado("INFO", "info", `Preparacion de Alimentos no Encontrada!`);
  }
  res.json(estructuraapi.toResponse());
};
