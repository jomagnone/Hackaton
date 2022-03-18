const Cursos = require("../models/cursos")
//const Proveedor = require("../models/proveedor")

const cursosGet = async (req, res) => {
  const cursos = await Cursos.find()
  res.json(cursos)
}

const cursosPut = async (req, res = response) => {
  const { id } = req.params;
  const { stock,id_tecnologia,descripcion,id_proveedor,titulo,img,duracion} = req.body;
  cursoUpdated= { id_curso: id,stock,descripcion,id_tecnologia,id_proveedor,titulo,img,duracion}
  await Cursos.findOneAndUpdate({id_curso: id}, cursoUpdated);
  res.json(cursoUpdated);
};

const cursosGetById = async (req, res) => {
  const { id } = req.params;
  const cursos = await Cursos.find({id_curso: id})
  res.json(cursos)
}

const cursosPost = async (req, res = response) => {
  const { stock,id_tecnologia,descripcion,id_proveedor,titulo,img,duracion} = req.body;
  const curso = { stock,id_tecnologia,descripcion,id_proveedor,titulo,img,duracion}

  let elementos = await Cursos.find()
  let newId
  if (elementos.length == 0) {
    newId = 1
  } else {
    newId = elementos[elementos.length - 1].id_curso + 1
  }
  const newElem = { ...curso, id_curso: newId }
  const contenido = new Cursos(newElem)
  await contenido.save()

  res.json(newElem);
};

const cursosDelete = async (req, res = response) => {
  const { id } = req.params;
  let resp=await Cursos.deleteOne({ id_curso: id })
  if (!resp.deletedCount) res.status(404).json(`EL curso id: ${id} no se encontro en la base.`)
  else res.json(`Usuario id: ${id} borrado ok`);
};

module.exports = {
  cursosGet,
  cursosPut,
  cursosPost,
  cursosGetById,
  cursosDelete
};
