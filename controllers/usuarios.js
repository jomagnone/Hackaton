const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/usuario");

const usuariosGet = async (req = request, res = response) => {
  //Mas eficiente en tiempo
  const [total, usuarios] = await Promise.all([
    Usuario.countDocuments({ estado: true }),
    Usuario.find({ estado: true }),
  ]);

  res.json({
    total,
    usuarios,
  });
};

const usuariosPut = async (req, res = response) => {
  const { id } = req.params;
  const { nombre, apellido, legajo, password, rol } = req.body;
  let newElem = {id_usuario:id, nombre, apellido, legajo, rol}
  console.log(newElem)
  if (password) {
    const salt = bcryptjs.genSaltSync();
    let newPassword = bcryptjs.hashSync(password, salt);
    newElem = {...newElem, password: newPassword}
  }
  await Usuario.findOneAndUpdate({ id_usuario: id }, newElem)
  res.json(newElem);
};

const usuariosPost = async (req, res = response) => {
  const { nombre, apellido, legajo, password, rol } = req.body;
  let elementos = await Usuario.find();
  let newId;
  if (elementos.length == 0) {
    console.log(`elementos: ${elementos}`);
    newId = 1;
  } else {
    newId = elementos[elementos.length - 1].id_usuario + 1;
  }
  const salt = bcryptjs.genSaltSync();

  let usuario = new Usuario({
    nombre,
    apellido,
    legajo,
    password: bcryptjs.hashSync(password, salt),
    rol,
    id_usuario: newId,
  });

  await usuario.save();
  res.json(usuario);
};

const usuariosDelete = async (req, res = response) => {
  const { id } = req.params;
  await Usuario.deleteOne({ id_usuario: id })
  res.json(`Usuario id: ${id} borrado ok`);
};

const usuariosLogin = async (req, res = response) => {
  const { legajo, password } = req.body;
  let elementos = await Usuario.find({
    legajo: legajo,
  });
  if (elementos.length === 0) {
    res.status(401).json({
      Error: "legajo inexistente",
    });
  } else {
    const resultado = await bcryptjs.compare(password, elementos[0].password);
    resultado
      ? res.json({id_usuario: elementos[0].id_usuario, nombre:elementos[0].nombre, legajo: elementos[0].legajo })
      : res.status(401).json({
          Error: "Contraseña mal",
        });
  }
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosLogin,
};
