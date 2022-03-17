const { Schema, model } = require("mongoose");

const AsignacionSchema = Schema({
    id_asignacion: {type: String, require: true},
    id_curso: {type: String, require: true},
    id_usuario: {type: String, require: true},
    licencia_codigo: {type: String, require: true},
    fecha_asignacion: {type: Date, require: true},
    vigencia: {type: Date, default: true},
});

AsignacionSchema.methods.toJSON = function () {
    const { __v, ...asignacion } = this.toObject();
    return asignacion;
  };

module.exports = model("Asignacion", AsignacionSchema);