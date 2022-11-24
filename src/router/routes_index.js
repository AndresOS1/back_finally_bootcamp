const router = require("express").Router();

const alimentosController = require("../controller/AlimentosController/alimentosController")
const loginController = require("../controller/AutenticacionController/loginController")
const reqAnimalesController = require("../controller/RequerimientosAnimalesController/requerimientosAnimalesController")
const especieController = require("../controller/EspeciesController/especiesController")
const usersControllers = require("../controller/Usuarios/usuariosController")
const typeNutrienteControllers = require("../controller/TipoNutrientesController/tipoNutrientesController")
const municipiosController = require("../controller/MunicipiosController/municipiosController")
const regionController = require("../controller/RegionController/regionController")
const preparacionController = require("../controller/PreparacionesController/preparacionesController")
const preparacioneAlimentoController = require("../controller/PreparacionesAlimentosController/preparacionesAlimentosController")

///////////////////////////////Routes Alimentos/////////////////////////////////////////
router.get('/allaliments', alimentosController.allAliments)
router.get('/onealiment/:id_alimentos', alimentosController.viewAliment)
router.post('/createaliment', alimentosController.createAliment)
router.put('/updatealiment/:id_alimentos', alimentosController.updateAliment)
router.delete('/deletealiment/:id_alimentos', alimentosController.deleteAliment)
router.get('/alimentsite/:region_id', alimentosController.AlimentsForSite)
router.get('/alimentestatus/:especie_id', reqAnimalesController.animalsForSpecies)

///////////////////////////////Routes Requerimiento de Animales/////////////////////////////////////////
router.get('/allreqanimals', reqAnimalesController.allReqAnimal)
router.get('/onereqanimal/:id_alimentos', reqAnimalesController.viewReqAnimal)
router.post('/createaliment', reqAnimalesController.createReqAnimal)
router.put('/updatealiment/:id_alimentos', reqAnimalesController.updateReqAnimal)
router.delete('/deletealiment/:id_alimentos', reqAnimalesController.deleteRqAnimal)


///////////////////////////////Routes Especie/////////////////////////////////////////

router.post('/createespecie', especieController.createEspecie)
router.get('/allespecies', especieController.allEspecies)
router.get('/oneespecie/:id_especie', especieController.viewEspecie)
router.put('/updateespecie/:id_especie', especieController.updateEspecie)
router.delete('/deleteespecie/:id_especie', especieController.deleteEspecie)


///////////////////////////////Routes Preparacion/////////////////////////////////////////

router.post('/createpreparacion', preparacionController.createPreparacion)
router.get('/allpreparaciones', preparacionController.allPreparaciones)
router.get('/onepreparacion/:id_preparacion', preparacionController.viewPreparacion)
router.put('/updatepreparacion/:id_preparacion', preparacionController.updatePreparacion)
router.delete('/deletepreparacion/:id_preparacion', preparacionController.updatePreparacion)


///////////////////////////////Routes Preparacion Alimento/////////////////////////////////////////

router.post('/createpreparacionalimento', preparacioneAlimentoController.createPreparacionAlimentos)
router.get('/allpreparacionesalimentos', preparacioneAlimentoController.allPreparacionesAlimentos)
router.get('/onepreparacionalimento/:id_preparacion', preparacioneAlimentoController.viewPreparacionAlimentos)
router.put('/updatepreparacionalimento/:id_preparacion', preparacioneAlimentoController.updatePreparacionAlimento)
router.delete('/deletepreparacionalimento/:id_preparacion', preparacioneAlimentoController.deletePreparacionAlimentos)


router.post('/login', loginController.LoginUser)


/////////////////////////////// Routese Users /////////////////////////////////////////
router.get('/allusers', usersControllers.allUsers)
router.post('/createUser', usersControllers.CreateUser)
router.get('/viewUser/:id_usuario', usersControllers.viewUser)
router.put('/updateUser/:id_usuario', usersControllers.UpdateUser)
router.delete('/deleteUser/:id_usuario', usersControllers.DeleteUser)

/////////////////////////////// Routes Region /////////////////////////////////////////
router.get('/allregiones', regionController.allRegiones)
router.post('/createregion', regionController.createRegion)
router.get('/viewregion/:id_region', regionController.viewRegion)
router.put('/updateregion/:id_region', regionController.deleteRegion)
router.delete('/deleteregion/:id_region', regionController.deleteRegion)

/////////////////////////////// Routes Tipo Nutrientes /////////////////////////////////////////
router.get('/allnutrientes', typeNutrienteControllers.allnutrientes)
router.get('/typenutriente/:id_tipo_nutriente', typeNutrienteControllers.viewTypeNutriente)
router.post('/updatetypenutriente/:id_tipo_nutriente', typeNutrienteControllers.UpdateTypeNutriente)
router.post('/createtypenutriente/:id_tipo_nutriente', typeNutrienteControllers.CreateTypeNutriente)
router.delete('/deletetypenutriente/:id_tipo_nutriente', typeNutrienteControllers.DeletetypeNutriente)


/////////////////////////////// Routes Mucnicipio /////////////////////////////////////////

router.get('/allmunicipio', municipiosController.allMunicipio)
router.get('/viewmunicipio/:id_municipio', municipiosController.viewMunicipio)
router.post('/updatemunicipio/:id_municipio', municipiosController.UpdateMunicipio)
router.post('/createmunicipio', municipiosController.CreateMunicipio)
router.delete('/deletemunicipio/:id_municipio', municipiosController.DeleteMunicipio)


///////////////////////////////Route Requuerimiento Animal ///////////////////////////////
router.get('/all_req_animals', reqAnimalesController.allReqAnimal)
router.get('/oneanimals/:id_animal', reqAnimalesController.viewReqAnimal)
router.post('/create_req_animal', reqAnimalesController.createReqAnimal)
router.put('/update_req_animal/:id_animal', reqAnimalesController.updateReqAnimal)
router.delete('/delete_req_animal/:id_animal', reqAnimalesController.deleteRqAnimal)
router.get('/animals/:especie_id',reqAnimalesController.animalsForSpecies)
module.exports = router;
