const estructuraApi = require("../../helpers/estructuraApi");
const RequerimientosAnimales = require('../../models/RequerimientoAnimal/requerimientoAnimalModel')

var requestRequerimientoAnimales = require("../../models/DTO/requerimientos_animales");
const { Pool } = require("pg");
const db = require("../../../env");

const pool = new Pool(db);

exports.allReqAnimal = async (req, res) => {
  let estructuraapi = new estructuraApi();

  let reqAnimal = await RequerimientosAnimales.findAll();
  if (reqAnimal.length > 0) {
    estructuraapi.setResultado(reqAnimal);
  } else {
    estructuraapi.setEstado(404, "error", "No hay requeremientos de animales Resgistrados");
  }
  res.json(estructuraapi.toResponse());
};



exports.viewReqAnimal = async (req, res) => {
  let estructuraapi = new estructuraApi();
  const id_animal = req.params.id_animal;
  const animal = await RequerimientosAnimales.findOne({
    where: { id_requerimiento_animal: id_animal },
  });
  if (animal) {
    estructuraapi.setResultado(animal);
  } else {
    estructuraapi.setEstado(404, "error", "Animal no encontrado");
  }
  res.json(estructuraapi.toResponse());
};

exports.createReqAnimal = async (req, res) => {
  let estructuraapi = new estructuraApi();

  requestRequerimientoAnimales = req.body;

  await RequerimientosAnimales.create(requestRequerimientoAnimales)
    .then((succes) => {
      estructuraapi.setResultado(succes);
    })
    .catch((error) => {
      estructuraapi.setEstado(
        error.parent.code || error,
        "Error al registrar el requerimiento Animal",
        error.parent.detail || error
      );
    });

  res.json(estructuraapi.toResponse());
};

exports.updateReqAnimal = async (req, res) => {
  let estructuraapi = new estructuraApi();
  const id_animal = req.params.id_animal;
  requestRequerimientoAnimales = req.body;
  let animal = await RequerimientosAnimales.findOne({
    where: { id_requerimiento_animal: id_animal },
  });
  console.log(animal);
  if (animal) {
    let updateAnimal = animal.update(requestRequerimientoAnimales);
    if (!updateAnimal) {
      estructuraapi.setEstado(204, "Error", "Error Inesperado");
    }
  } else {
    estructuraapi.setEstado(204, "Not Found", "No existe este requerimiento Animal");
  }

  res.json(estructuraapi.toResponse());
};

exports.deleteRqAnimal = async (req, res) => {
  let estructuraapi = new estructuraApi();

  const id_animal = req.params.id_animal;

  const animal = await RequerimientosAnimales.findOne({
    where: { id_requerimiento_animal: id_animal },
  });

  if (animal) {
    animal.destroy();
  } else {
    api.setEstado("INFO", "info", `Alimento no Encontrado!`);
  }
  res.json(estructuraapi.toResponse());
};
exports.animalsForSpecies = async (req, res) => {
  let estructuraapi = new estructuraApi();
  const especie_id = req.params.especie_id;
  const especieporreq = await pool.query(`SELECT 
      *
      FROM requerimientos_animales
      JOIN especies
      ON especies.id_especie = requerimientos_animales.especie_id
      WHERE requerimientos_animales.especie_id = ${especie_id}`);
  // console.log(asignaciones.rows);
  if (especieporreq.rows.length > 0) {
    estructuraapi.setResultado(especieporreq.rows);
  } else {
    estructuraapi.setEstado(404, "error", "No encontrado!");
  }
  res.json(estructuraapi.toResponse());
};