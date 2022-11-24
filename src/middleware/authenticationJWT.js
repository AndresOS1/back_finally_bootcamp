const jwt = require('jsonwebtoken');
const estructorApi = require('../helpers/estructuraApi');
let token = ''
let decodedToken = {}
module.exports = (request, response, next) => {
    const api = new estructorApi()
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7)
    }
    try {
        decodedToken = jwt.verify(token, process.env.PASWORDTOKEN)
    }catch {
        decodedToken = {} 
    }

    if (!token || !decodedToken.id) {
        api.setEstado(401, "error" ,"'Token Missing or Invalid'")
        return response.status(401).json(api.toResponse())
    }
    const { id: user_id } = decodedToken
    request.user_id = user_id
    next()
}
