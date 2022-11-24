const router = require("express").Router();

const alimentosController = require("../controller/AlimentosController/alimentosController")
const loginController = require("../controller/AutenticacionController/loginController")
const reqAnimalesController = require("../controller/RequerimientosAnimalesController/requerimientosAnimalesController")
const usersControllers = require("../controller/Usuarios/usuariosController")
const typeNutrienteControllers = require("../controller/TipoNutrientesController/tipoNutrientesController")
const municipiosController = require("../controller/MunicipiosController/municipiosController")

///////////////////////////////Routes Alimentos/////////////////////////////////////////
router.get('/allaliments', alimentosController.allAliments)
router.get('/onealiment/:id_alimentos', alimentosController.viewAliment)
router.post('/createaliment', alimentosController.createAliment)
router.put('/updatealiment/:id_alimentos', alimentosController.updateAssignment)
router.delete('/deletealiment/:id_alimentos', alimentosController.deleteAssignment)
router.get('/alimentsite/:region_id', alimentosController.AlimentsForSite)
// router.get('/alimentestatus/:especie_id', listRequerimientoAcontroller.especieForEstado)

///////////////////////////////Routes Requerimiento de Animales/////////////////////////////////////////
router.get('/all_req_aliments', reqAnimalesController.allReqAliments)

/////////////////////////////// Login /////////////////////////////////////////
router.post('/login', loginController.LoginUser)

router.get('/allmunicipio', municipiosController.allMunicipio)
router.get('/viewmunicipio/:id_municipio', municipiosController.viewMunicipio)
router.post('/updatemunicipio/:id_municipio', municipiosController.UpdateMunicipio)
router.post('/createmunicipio', municipiosController.CreateMunicipio)
router.delete('/deletemunicipio/:id_municipio', municipiosController.DeleteMunicipio)


module.exports = router;
