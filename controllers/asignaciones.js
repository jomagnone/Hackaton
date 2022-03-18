const Asignacion = require("../models/asignacion");
const Cursos = require("../models/cursos");
const Usuarios = require("../models/usuario");
const Proveedor = require("../models/proveedor");

const getAsignacionById = async (req, res) => {
  //FALTA AGREGAR LOGICA DE mostrar nombre y cursos (igual q en getAsign....) 
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
    if( !req.body.id_curso) res.status(400).json("Campo id_curso faltante o erroneo en el body.")
    if( !req.body.id_usuario) res.status(400).json("Campo id_usuario faltante o erroneo en el body.")
    const {id_curso,id_usuario} = req.body
    const time = new Date()
    let vigencia = new Date();
    let curso = await Cursos.find({ id_curso: id_curso });
    if (curso.length==0) res.status(404).json(`El id_curso: ${id_curso} no se encontro en la base de datos`)
    vigencia.setHours(vigencia.getHours() + curso[0].duracion)
    
    // Analizo stock del curso
    if (curso[0].stock != null) await Cursos.findOneAndUpdate({id_curso: id_curso}, {stock:curso[0].stock -1} );
    
    // Manejo de la licencia 
    // Lo ideal es traermela del stock del proveedor 
    let proveedor = await Proveedor.find({ id_proveedor: curso[0].id_proveedor });

    //let licencia_codigo="user@licencia/12345"
    let licencia_codigo=proveedor[0].stock.pop()
    if (proveedor[0].stock.length > 0) await Proveedor.findOneAndUpdate({id_proveedor: proveedor[0].id_proveedor}, proveedor[0] );
    else licencia_codigo="Lista de espera"

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

  let asignacion = await Asignacion.find({ id_asignacion: id });

  if (asignacion[0].licencia_codigo.length > 0) await Proveedor.findOneAndUpdate({id_proveedor: aisgnacion[0].id_proveedor}, proveedor[0].stock.push(licencia_codigo) );

  let resp=await Asignacion.deleteOne({ id_asignacion: id })
  if (!resp.deletedCount) res.status(404).json(`La  asignacion id: ${id} no se encontro en la base.`)
  else  res.json(`Asignacion id: ${id} borrado ok`);
};

module.exports = { getAsignacionById, getAsignacion,postAsignacion,deleteAsignacion };
