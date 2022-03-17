//const { response, request } = require("express");
const Asignacion = require("../models/asignacion");
const Cursos = require("../models/cursos");

const getAsignacionById = async (req, res) => {
    const {id} = req.params
    const asignaciones = await Asignacion.find({id_asignacion: id})
  res.json({
    asignaciones
  });
};

const getAsignacion = async (req, res) => {
    let asignaciones = await Asignacion.find()
    asignaciones.forEach(async element =>  {
        let curso = await Cursos.find({id_curso: element.id_curso})
        console.log(curso)
        //element = {...element, curso.titulo}
    });
    //console.log(asignaciones)
    res.json({
        asignaciones
    });
};

module.exports = {getAsignacionById, getAsignacion}