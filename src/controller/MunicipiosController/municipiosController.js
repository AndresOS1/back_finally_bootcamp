const modelMunicipio = require('../../models/Municipio/municipioModel')
const estructuraApi = require('../../helpers/estructuraApi')

//search all users
exports.allMunicipio = async (req, res) => {
    let api = new estructuraApi()
    const municipio = await modelMunicipio.findAll()
    if (municipio.length > 0) {
        api.setResultado(municipio)
    } else {
        api.setEstado(404, "municipio entry", "municpio list  empty")
    }
    res.json(api.toResponse())
}

//search user by :id
exports.viewMunicipio = async (request, response) => {
    let api = new estructuraApi()
    const { id_municipio } = request.params
    const municipio = await modelMunicipio.findOne({ where: { id_municipio } })

    if (municipio != null) {
        api.setResultado(municipio)
    } else {
        api.setEstado('204', 'Empty', "consult success but Empty")
    }
    response.json(api.toResponse())
}

//update One users
exports.UpdateMunicipio = async (request, response) => {
    const api = new estructuraApi()
    const { id_municipio } = request.params
    const municipio = request.body
    const update = await modelMunicipio.update(municipio, { where: { id_municipio } })

    if (update[0] > 0) {
        api.setResultado(municipio)
    } else {
        api.setEstado(204, 'Empty', " id_municipio no encontrado")
    }

    response.json(api.toResponse())
}

//create user
exports.CreateMunicipio = async (request, response) => {
    let api = new estructuraApi()//instanciar
    const municipio = request.body // igualo el body a mi class

    const create = await modelMunicipio.create(municipio)
        .catch(err => {
            api.setEstado(err.parent.code|| 402,"error", err.message || err)
            return response.json(api.toResponse())
        })
    api.setResultado(create)

    response.json(api.toResponse())
}

//Delete user
exports.DeleteMunicipio = async (request, response) => {
    let api = new estructuraApi()
    let { id_municipio } = request.params
    await modelMunicipio.destroy({where:{id_municipio}})
        .then(succ => {
            if (succ != 0) {
                api.setEstado('SUCC', 'success', `id_municipio{${id_municipio}}:delete successfully`)
            } else {
                api.setEstado('INFO', 'info', `id_municipio{${id_municipio}}:!NO ENCONTRADO!`)
            }
        })
        .catch(err => {
            api.setEstado(err.parent.code, "error", err.parent.detail)
        })
    response.json(api.toResponse())
}