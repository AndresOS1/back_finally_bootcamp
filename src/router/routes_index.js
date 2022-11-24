const router = require("express").Router();

const alimentosController = require("../controller/AlimentosController/alimentosController")
const loginController = require("../controller/AutenticacionController/loginController")
const reqAnimalesController = require("../controller/RequerimientosAnimalesController/requerimientosAnimalesController")
const especieController = require("../controller/EspeciesController/especiesController")
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


module.exports = router;
