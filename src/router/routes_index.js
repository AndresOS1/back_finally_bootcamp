const router = require("express").Router();

const alimentosController = require("../controller/AlimentosController/alimentosController")
const loginController = require("../controller/AutenticacionController/loginController")
const reqAnimalesController = require("../controller/RequerimientosAnimalesController/requerimientosAnimalesController")
const especieController = require("../controller/EspeciesController/especiesController")
const usersControllers = require("../controller/Usuarios/usuariosController")
const typeNutrienteControllers = require("../controller/TipoNutrientesController/tipoNutrientesController")
const municipiosController = require("../controller/MunicipiosController/municipiosController")

///////////////////////////////Routes Alimentos/////////////////////////////////////////
router.get('/allaliments', alimentosController.allAliments)
router.get('/onealiment/:id_alimentos', alimentosController.viewAliment)
router.post('/createaliment', alimentosController.createAliment)
router.put('/updatealiment/:id_alimentos', alimentosController.updateAliment)
router.delete('/deletealiment/:id_alimentos', alimentosController.deleteAliment)
router.get('/alimentsite/:region_id', alimentosController.AlimentsForSite)
// router.get('/alimentestatus/:especie_id', listRequerimientoAcontroller.especieForEstado)

///////////////////////////////Routes Requerimiento de Animales/////////////////////////////////////////
router.get('/all_req_aliments', reqAnimalesController.allReqAliments)



///////////////////////////////Routes Especie/////////////////////////////////////////

router.post('/createespecie', especieController.createEspecie)


router.post('/login', loginController.LoginUser)


/////////////////////////////// Routese Users /////////////////////////////////////////
router.get('/allusers', usersControllers.allUsers)
router.post('/createUser', usersControllers.CreateUser)
router.get('/viewUser/:id_usuario', usersControllers.viewUser)
router.put('/updateUser/:id_usuario', usersControllers.UpdateUser)
router.delete('/deleteUser/:id_usuario', usersControllers.DeleteUser)

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
