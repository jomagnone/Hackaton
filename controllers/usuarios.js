const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/usuario");

const usuariosGet = async (req = request, res = response) => {
  const { limite = 5, desde = 0 } = req.query;

  //Mas eficiente en tiempo
  const [total, usuarios] = await Promise.all([
    Usuario.countDocuments({ estado: true }),
    Usuario.find({ estado: true }).skip(Number(desde)).limit(Number(limite)),
  ]);

  res.json({
    total,
    usuarios,
  });
};

const usuariosPut = async (req, res = response) => {
  const { id } = req.params;
  const { _id, password, google, correo, ...resto } = req.body;

  // TODO validar contra base de datos
  if (password) {
    //Encriptar la contraseña, el genSaltSync genera el nivel de encriptacion
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);
  }

  const usuario = await Usuario.findOneAndUpdate(id, resto);

  res.json({ usuario });
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

  // Guardar en BD
  await usuario.save();
  res.json({
    usuario,
  });
};

const usuariosDelete = async (req, res = response) => {
  const { id } = req.params;
  //Baja logica
  const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });
  res.json({
    usuario,
  });
};

const usuariosLogin = async (req, res = response) => {
  const { legajo, password } = req.body;
  let elementos = await Usuario.find({
    legajo: legajo,
  });
  console.log(elementos);
  if (elementos.length === 0) {
    res.status(401).json({
      Error: "legajo inexistente",
    });
  } else {
    const resultado = await bcryptjs.compare(password, elementos[0].password);
    resultado
      ? res.json(elementos[0].id_usuario)
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
