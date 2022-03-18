const { Router } = require("express");

const {
  cursosGet,
  cursosPut,
  cursosPost,
  cursosGetById,
  cursosDelete
} = require("../controllers/cursos");

const routerCursos = Router();

routerCursos.get("/", cursosGet);
routerCursos.get("/:id", cursosGetById);
routerCursos.put("/:id", cursosPut);
routerCursos.post("/", cursosPost);
routerCursos.delete("/:id", cursosDelete);

module.exports = routerCursos;
