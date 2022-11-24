const modelUser = require('../../models/Usuario/UsuarioModel')
const estructuraApi = require('../../helpers/estructuraApi')
var requestUsers = require('../../models/DTO/ClassUsersRequest')
const bcrypt = require('bcrypt')
const saltRounds = 4

//search all users
exports.allUsers = async (req, res) => {
    let obj1 = new estructuraApi()
    const user = await modelUser.findAll()
    if (user.length > 0) {
        obj1.setResultado(user)
    } else {
        obj1.setEstado(404, "user empty", "list user empty")
    }
    res.json(obj1.toResponse())
}

//search user by :id
exports.viewUser = async (request, response) => {
    let obj1 = new estructuraApi()
    const id = request.params.id_usuario
    await modelUser.findOne({ where: { id_usuario: id } })
        .then(succ => {
            if (succ != null) {
                obj1.setResultado(succ)
            } else {
                obj1.setEstado('204', 'Empty', "consult success but Empty")
            }
        })
        .catch(err => {
            obj1.setEstado(err.parent.code, 'Empty', err.parent.detail)
        })
    response.json(obj1.toResponse())
}

//update One users
exports.UpdateUser = async (request, response) => {
    const api = new estructuraApi()
    const {id_usuario} = request.params
    requestUsers = request.body
    let passwort = await bcrypt.hash(requestUsers.contrasena, saltRounds)//encriptar paswort
    requestUsers.contrasena = passwort
    await modelUser.update(
        requestUsers
        , {
            where: {
                id_usuario: id_usuario
            }
        }
    ).then(succ => {
        if (succ[0] > 0) {
            api.setResultado(requestUsers)
        } else {
            api.setEstado(204, 'Empty', "id usuario no encontrado")
        }
    }).catch(err => {
        api.setEstado(err.parent || err, 'error', err.parent.detail || err)
    })
    response.json(api.toResponse())
}

//create user
exports.CreateUser = async (request, response) => {
    let api = new estructuraApi()//instanciar
    requestUsers = request.body // igualo el body a mi class
    let passwort = await bcrypt.hash(requestUsers.contrasena, saltRounds)//encriptar paswort
    requestUsers.contrasena = passwort
    await modelUser.create(requestUsers)
    .then(succ => {
        api.setResultado(succ)
    }).catch(err => {
        api.setEstado(err.parent.code || err, 'error', err.parent.detail || err)
    })
    response.json(api.toResponse())
}

//Delete user
exports.DeleteUser = async (request, response) => {
    let api = new estructuraApi()
    let {id_usuario} = request.params
    await modelUser.destroy({ where: { id_usuario: id_usuario } })
        .then(succ => {
            if (succ != 0) {
                api.setEstado('SUCC', 'success', `id_usuaio{${id_usuario}}:delete successfully`)
            } else {
                api.setEstado('INFO', 'info', `id_usuaio{${id_usuario}}:!NO ENCONTRADO!`)
            }
        })
        .catch(err => {
            api.setEstado(err.parent.code, "error", err.parent.detail)
        })
    response.json(api.toResponse())
}