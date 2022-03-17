const Cursos = require("../models/cursos")

const cursosGet = async (req, res) => {
  const cursos = await Cursos.find()
  res.json({
    cursos,
  })
}

const cursosPut = async (req, res = response) => {
  const { id } = req.params;
  const { stock,id_tecnologia,descripcion,id_proveedor,titulo,img,duracion} = req.body;
  cursoUpdated= { id_curso: id,stock,descripcion,id_tecnologia,id_proveedor,titulo,img,duracion}
  await Cursos.findOneAndUpdate({id_curso: id}, cursoUpdated);
  res.json({ cursoUpdated });
};


const cursosPost = async (req, res = response) => {
  const { stock,id_tecnologia,descripcion,id_proveedor,titulo,img,duracion} = req.body;
  const curso = { stock,id_tecnologia,descripcion,id_proveedor,titulo,img,duracion}

  let elementos = await Cursos.find()
  let newId
  if (elementos.length == 0) {
    console.log(`elementos: ${elementos}`)
    newId = 1
  } else {
    newId = elementos[elementos.length - 1].id_curso + 1
  }
  const newElem = { ...curso, id_curso: newId }
  const contenido = new Cursos(newElem)
  await contenido.save()

  res.json({
    curso,
  });
};
/*
const usuariosDelete = async (req, res = response) => {
  const { id } = req.params;

  //Fisicamente lo borramos
  // const usuario = await Usuario.findByIdAndDelete(id);

  //Baja logica
  const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });

  res.json({
    usuario,
  });
};

*/
module.exports = {
  cursosGet,
  cursosPut,
  cursosPost
  //cursosDelete,
};
