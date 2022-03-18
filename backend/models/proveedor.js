const { Schema, model } = require("mongoose");

const ProveedorSchema = Schema({
    id_proveedor: { type: Number, required: true },
    stock: { type: Array, required: true },
    nombre: { type: String,require: true }
});

ProveedorSchema.methods.toJSON = function () {
  const { __v, ...proveedor } = this.toObject();
  return proveedor;
};

module.exports = model("Proveedor", ProveedorSchema);