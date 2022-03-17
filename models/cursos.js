const { Schema, model } = require("mongoose");

const CursosSchema = Schema({
  id_curso: { type: Number, required: true },
  vacantes: { type: Number, required: true },
  id_tecnologia: { type: Number, required: true },
  id_proveedor: { type: Number, required: true },
  nombre: {
    type: String,
    require: [true, "El nombre es obligatorio"],
  },
  img: {
    type: String,
  },
  duracion: { type: Number, required: true },
});

CursosSchema.methods.toJSON = function () {
  const { __v, ...cursos } = this.toObject();
  return cursos;
};

module.exports = model("Curso", CursosSchema);