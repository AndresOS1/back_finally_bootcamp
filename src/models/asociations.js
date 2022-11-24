const Alimento = require("./Alimento/alimentoModel")
const Especie = require("./Especie/especieModel")
const Municipio = require("./Municipio/municipioModel")
const Preparacion = require("./Preparacion/preparacionModel")
const PreparacionAlimento = require("./PreparacionAlimento/preparacionAnimalModel")
const Region = require("./Region/regionModel")
const RequerimientoAnimal = require("./RequerimientoAnimal/requerimientoAnimalModel")
const TipoNutriente = require("./TipoNutriente/tipoNutrienteModel")
const Usuario = require("./Usuario/UsuarioModel")

Alimento.belongsTo(Region, { foreignKey: "region_id" });
Region.hasMany(Alimento, { foreignKey: "region_id" });

Alimento.belongsTo(TipoNutriente, { foreignKey: "tipo_nutriente_id" });
TipoNutriente.hasMany(Alimento, { foreignKey: "tipo_nutriente_id" });

Preparacion.belongsTo(Usuario, { foreignKey: "usuario_id" });
Usuario.hasMany(Preparacion, { foreignKey: "usuario_id" });

Preparacion.belongsTo(RequerimientoAnimal, { foreignKey: "requerimiento_animal_id" });
RequerimientoAnimal.hasMany(Preparacion, { foreignKey: "requerimiento_animal_id" });

PreparacionAlimento.belongsTo(Alimento, { foreignKey: "alimento_id" });
Alimento.hasMany(PreparacionAlimento, { foreignKey: "alimento_id" });

PreparacionAlimento.belongsTo(Preparacion, { foreignKey: "preparacion_id" });
Preparacion.hasMany(PreparacionAlimento, { foreignKey: "preparacion_id" });


Region.belongsTo(Municipio, { foreignKey: "municipio_id" });
Municipio.hasMany(Region, { foreignKey: "municipio_id" });

RequerimientoAnimal.belongsTo(Especie, { foreignKey: "especie_id" });
Especie.hasMany(RequerimientoAnimal, { foreignKey: "especie_id" });

Usuario.belongsTo(Region, { foreignKey: "region_id" });
Region.hasMany(Usuario, { foreignKey: "region_id" });
