const estructuraApi = require("../../helpers/estructuraApi");
const Region = require("../../models/Region/regionModel");
const asociations = require("../../models/asociations");

var requestRegion = require("../../models/DTO/RegionDTO");
const { Pool } = require("pg");
const db = require("../../../env");

const pool = new Pool(db);

exports.allRegiones = async (req, res) => {
  let estructuraapi = new estructuraApi();

  let regiones = await Region.findAll();
  if (regiones.length > 0) {
    estructuraapi.setResultado(regiones);
  } else {
    estructuraapi.setEstado(404, "error", "No hay Regiones Resgistradas");
  }
  res.json(estructuraapi.toResponse());
};

exports.viewRegion = async (req, res) => {
  let estructuraapi = new estructuraApi();
  const id_region = req.params.id_region;
  const region = await Region.findOne({
    where: { id_region: id_region },
  });
  if (region) {
    estructuraapi.setResultado(region);
  } else {
    estructuraapi.setEstado(404, "error", "Region no encontrada!");
  }
  res.json(estructuraapi.toResponse());
};

exports.createRegion = async (req, res) => {
  let estructuraapi = new estructuraApi();

  requestRegion = req.body;
  //   console.log(requestAlimentos);

  let newRegion = await Region.create(requestRegion);

  if (newRegion) {
    estructuraapi.setResultado(newRegion);
    // api.setEstado("success", "success", "se ")
  } else {
    estructuraapi.setEstado(
      error.parent.code || 402,
      "error",
      "Error al registrar la Region"
    );
  }

  res.json(estructuraapi.toResponse());
};

exports.updateRegion = async (req, res) => {
  let estructuraapi = new estructuraApi();

  const id_region = req.params.id_region;

  requestRegion = req.body;

  let region = await Region.findOne({
    where: {
      id_region: id_region,
    },
  });

  if (region) {
    let updateRegion = region.update(requestRegion);
    if (!updateRegion) {
      estructuraapi.setEstado(204, "Error", "Error Inesperado");
    }
  } else {
    estructuraapi.setEstado(204, "Not Found", "No existe esta Region");
  }

  res.json(estructuraapi.toResponse());
};

exports.deleteRegion = async (req, res) => {
  let estructuraapi = new estructuraApi();

  const id_region = req.params.id_region;

  const region = await Region.findOne({
    where: { id_region: id_region },
  });

  if (region) {
    region.destroy();
  } else {
    estructuraapi.setEstado("INFO", "info", `Region no Encontrada!`);
  }
  res.json(estructuraapi.toResponse());
};
