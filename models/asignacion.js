const { Schema, model } = require("mongoose");

const AsignacionSchema = Schema({
  id_asignacion: { type: Number, require: true },
  id_curso: { type: Number, require: true },
  id_usuario: { type: Number, require: true },
  licencia_codigo: { type: String, require: true },
  fecha_asignacion: { type: String, require: true },
  vigencia: { type: String, default: true },
});

AsignacionSchema.methods.toJSON = function () {
  const { __v, ...asignacion } = this.toObject();
  return asignacion;
};

module.exports = model("Asignacion", AsignacionSchema);
