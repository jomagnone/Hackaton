const { Router } = require("express");
const { getAsignacionById, getAsignacion } = require("../controllers/asignaciones")

const routerAsignacion = new Router;

routerAsignacion.get("/:id", getAsignacionById);
routerAsignacion.get("/", getAsignacion);

module.exports = routerAsignacion;