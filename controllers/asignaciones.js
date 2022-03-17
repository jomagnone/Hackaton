//const { response, request } = require("express");
const Asignacion = require("../models/asignacion");

const getAsignacionById = async (req, res) => {
    const {id} = req.params
    const asignaciones = await Asignacion.find({id_asignacion: id})
  res.json({
    asignaciones
  });
};

module.exports = {getAsignacionById};