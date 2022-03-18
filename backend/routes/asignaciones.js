const { Router } = require("express");
const { getAsignacionById, getAsignacion,postAsignacion,deleteAsignacion } = require("../controllers/asignaciones")

const routerAsignacion = new Router;

routerAsignacion.get("/:id", getAsignacionById);
routerAsignacion.get("/", getAsignacion);
routerAsignacion.post("/", postAsignacion);
routerAsignacion.delete("/:id", deleteAsignacion);


module.exports = routerAsignacion;