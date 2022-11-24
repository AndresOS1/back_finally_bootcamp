const bcrypt = require("bcrypt");
const modelUser = require("../../models/Usuario/UsuarioModel");
const jwt = require("../../controller/AutenticacionController/token");
const estructuraApi = require("./../../helpers/estructuraApi");

exports.LoginUser = async (request , response) => {
  let estructuraapi = new estructuraApi();
  const { body } = request;
  const { identificacion, pasword } = body;
  //consult de user
  const user = await modelUser.findOne({
    where: { identificacion },
  });

  const passwortCorrect = //use ternarias
    user === null //condition
      ? false //si es true
      : await bcrypt.compare(pasword, user.contrasena); //si es false
  /*second validate pasword if pasword */

  if (!(identificacion && passwortCorrect)) {
    estructuraapi.setEstado(
      401,
      "Error",
      "Contraseña O identificacion invalidas"
    );
  } else {
    let jsontoken = new jwt();

    let userForToken = {
      id: user.id_usuario,
      identificacion: user.identificacion,
      pasword: user.contrasena,
    };
    let token = jsontoken.sing(userForToken);
    estructuraapi.setResultado({
      userForToken: userForToken,
      token: token,
    });
  }
  return response.json(estructuraapi.toResponse());
};
