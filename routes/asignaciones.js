const { Router } = require("express");
const { getAsignacionById } = require("../controllers/asignaciones")

const routerAsignacion = new Router;

routerAsignacion.get("/:id", getAsignacionById);

module.exports = routerAsignacion;