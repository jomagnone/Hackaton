const Proveedor = require("../models/proveedor")

const proveedorGet = async (req, res) => {
  const proveedor = await Proveedor.find()
  res.json(proveedor)
}

const proveedorPut = async (req, res = response) => {
  const { id } = req.params;
  const { stock,nombre} = req.body;
  proveedorUpdated= { id_proveedor: id,stock,nombre}
  await Proveedor.findOneAndUpdate({id_proveedor: id}, proveedorUpdated);
  res.json(proveedorUpdated);
};

const proveedorGetById = async (req, res) => {
  const { id } = req.params;
  const proveedor = await Proveedor.find({id_proveedor: id})
  res.json(proveedor)
}

const proveedorPost = async (req, res = response) => {
  const { stock,nombre} = req.body;
  const prov = { stock,nombre}

  let elementos = await Proveedor.find()
  let newId
  if (elementos.length == 0) {
    newId = 1
  } else {
    newId = elementos[elementos.length - 1].id_proveedor + 1
  }
  const newElem = { ...prov, id_proveedor: newId }
  const contenido = new Proveedor(newElem)
  await contenido.save()
  res.json(newElem);
};

const proveedorDelete = async (req, res = response) => {
  const { id } = req.params;
  let resp=await Proveedor.deleteOne({ id_proveedor: id })
  if (!resp.deletedCount) res.status(404).json(`EL proveedor id: ${id} no se encontro en la base.`)
  else res.json(`Proveedor id: ${id} borrado ok`);
};

module.exports = {
  proveedorGet,
  proveedorPut,
  proveedorPost,
  proveedorGetById,
  proveedorDelete
};
