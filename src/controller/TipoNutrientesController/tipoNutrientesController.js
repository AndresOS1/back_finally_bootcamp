const modelTipoNutriente = require('../../models/TipoNutriente/tipoNutrienteModel')
const estructuraApi = require('../../helpers/estructuraApi')

//search all users
exports.allnutrientes = async (req, res) => {
    let api = new estructuraApi()
    const typeNutriente = await modelTipoNutriente.findAll()
    if (typeNutriente.length > 0) {
        api.setResultado(typeNutriente)
    } else {
        api.setEstado(404, "nutrientes entry", "list type nutriente empty")
    }
    res.json(api.toResponse())
}

//search user by :id
exports.viewTypeNutriente = async (request, response) => {
    let api = new estructuraApi()
    const { id_tipo_nutriente } = request.params
    const typenutriente = await modelTipoNutriente.findOne({ where: { id_tipo_nutriente: id_tipo_nutriente } })

    if (typenutriente != null) {
        api.setResultado(typenutriente)
    } else {
        api.setEstado('204', 'Empty', "consult success but Empty")
    }
    response.json(api.toResponse())
}

//update One users
exports.UpdateTypeNutriente = async (request, response) => {
    const api = new estructuraApi()
    const { id_tipo_nutriente } = request.params
    const nutiente = request.body
    const update = await modelTipoNutriente.update(nutiente, { where: { id_tipo_nutriente } })

    if (update[0] > 0) {
        api.setResultado(nutiente)
    } else {
        api.setEstado(204, 'Empty', "id usuario no encontrado")
    }

    response.json(api.toResponse())
}

//create user
exports.CreateTypeNutriente = async (request, response) => {
    let api = new estructuraApi()//instanciar
    const nutriente = request.body // igualo el body a mi class

    const create = await modelTipoNutriente.create(nutriente)
        .catch(err => {
            api.setEstado(err.parent.code|| 402,"error", err.message || err)
            return response.json(api.toResponse())
        })
    api.setResultado(create)

    response.json(api.toResponse())
}

//Delete user
exports.DeletetypeNutriente = async (request, response) => {
    let api = new estructuraApi()
    let { id_tipo_nutriente } = request.params
    await modelTipoNutriente.destroy({where:{id_tipo_nutriente}})
        .then(succ => {
            if (succ != 0) {
                api.setEstado('SUCC', 'success', `id_usuaio{${id_tipo_nutriente}}:delete successfully`)
            } else {
                api.setEstado('INFO', 'info', `id_usuaio{${id_tipo_nutriente}}:!NO ENCONTRADO!`)
            }
        })
        .catch(err => {
            api.setEstado(err.parent.code, "error", err.parent.detail)
        })
    response.json(api.toResponse())
}