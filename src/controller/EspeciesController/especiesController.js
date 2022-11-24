const estructuraApi = require("../../helpers/estructuraApi");
const Especie = require("../../models/Especie/especieModel");
const asociations = require("../../models/asociations");

const { Pool } = require("pg");
const db = require("../../../env");

const pool = new Pool(db);

exports.allEspecies = async (req, res) => {
  let estructuraapi = new estructuraApi();

  let especies = await Especie.findAll();
  if (especies.length > 0) {
    estructuraapi.setResultado(especies);
  } else {
    estructuraapi.setEstado(404, "error", "No hay Especies Resgistradas");
  }
  res.json(estructuraapi.toResponse());
};

exports.viewEspecie = async (req, res) => {
  let estructuraapi = new estructuraApi();
  const id_especie = req.params.id_especie;
  const especie = await Especie.findOne({
    where: { id_especie: id_especie },
  });
  if (especie) {
    estructuraapi.setResultado(especie);
  } else {
    estructuraapi.setEstado(404, "error", "Especie no encontrada");
  }
  res.json(estructuraapi.toResponse());
};

exports.createEspecie = async (req, res) => {
  let estructuraapi = new estructuraApi();

  let especie = req.body;

  const newEspecie = await Especie.create(especie);

  if (newEspecie) {
    estructuraapi.setResultado(newEspecie);
    // api.setEstado("success", "success", "se ")
  } else {
    estructuraapi.setEstado(
      error.parent.code || 402,
      "error",
      "Error al registrar la Especie"
    );
  }

  res.json(estructuraapi.toResponse());
};

exports.updateEspecie = async (req, res) => {
  let estructuraapi = new estructuraApi();

  const id_especie = req.params.id_especie;

  let especieBody = req.body.nombre_especie;

  let especie = await Especie.findOne({
    where: {
      id_especie: id_especie,
    },
  });

  if (especie) {
    let updateEspecie = especie.update(especieBody);
    if (!updateAliment) {
      estructuraapi.setEstado(204, "Error", "Error Inesperado");
    }
  } else {
    estructuraapi.setEstado(204, "Not Found", "No existe esta Especie");
  }

  res.json(estructuraapi.toResponse());
};

exports.deleteEspecie = async (req, res) => {
  let estructuraapi = new estructuraApi();

  const id_especie = req.params.id_especie;

  const especie = await Especie.findOne({
    where: { id_especie: id_especie },
  });

  if (especie) {
    especie.destroy();
  } else {
    api.setEstado("INFO", "info", `Especie no Encontrada!`);
  }
  res.json(estructuraapi.toResponse());
};
