const Asignacion = require("../models/asignacion");
const Cursos = require("../models/cursos");
const Usuarios = require("../models/usuario");

const getAsignacionById = async (req, res) => {
  const { id } = req.params;
  const asignaciones = await Asignacion.find({ id_asignacion: id });
  res.json(asignaciones);
};

const getAsignacion = async (req, res) => {
  let asignaciones = await Asignacion.find();
  let data=[]
  let dataFinal=[]
  let catalogo= await Cursos.find()
  asignaciones.forEach(async (elementAsign) => {
    catalogo.forEach(async (elementCat) => {
      if (elementCat.id_curso==elementAsign.id_curso){
        let newE = {...elementAsign._doc, curso: elementCat.titulo, stock_licencias: elementCat.stock}
        data.push(newE)
      }
    });
  })

  let usuarios= await Usuarios.find()
  data.forEach(async (elementData) => {
    usuarios.forEach(async (elementUser) => {
      if (elementUser.id_usuario==elementData.id_usuario){
      let newEl = {...elementData, nombre: elementUser.nombre}
      dataFinal.push(newEl)
      }
    })
  })

  res.json(dataFinal);
}

const postAsignacion = async (req, res) => {
    const {id_curso,id_usuario,licencia_codigo} = req.body
    if( !id_curso||!id_usuario||!licencia_codigo) res.status(400).json("Campo faltante o erroneo en el body.")
    const time = new Date()
    let vigencia = new Date();
    let curso = await Cursos.find({ id_curso: id_curso });
    if (curso.length==0) res.status(404).json(`El id_curso: ${id_curso} no se encontro en la base de datos`)
    vigencia.setHours(vigencia.getHours() + curso[0].duracion)

    await Cursos.findOneAndUpdate({id_curso: id_curso}, {stock:curso[0].stock -1} );
    
    let newAsign = {id_curso,id_usuario,licencia_codigo, fecha_asignacion: time.toLocaleString(), vigencia: vigencia.toLocaleString()}
    let elementos = await Asignacion.find()
    let newId
    if (elementos.length == 0) {
      newId = 1
    } else {
      newId = elementos[elementos.length - 1].id_asignacion + 1
    }
    const newElem = { ...newAsign, id_asignacion: newId }
    const contenido = new Asignacion(newElem)
    await contenido.save()
    res.json(newElem);
}

const deleteAsignacion = async (req, res = response) => {
  const { id } = req.params;
  await Asignacion.deleteOne({ id_asignacion: id })
  res.json(`Asignacion id: ${id} borrado ok`);
};

module.exports = { getAsignacionById, getAsignacion,postAsignacion,deleteAsignacion };
