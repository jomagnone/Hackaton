const { Router } = require("express");

const {
  cursosGet,
  cursosPut,
  cursosPost,
  cursosGetById
 // cursosDelete
} = require("../controllers/cursos");

const routerCursos = Router();

routerCursos.get("/", cursosGet);
routerCursos.get("/:id", cursosGetById);
routerCursos.put("/:id", cursosPut);
routerCursos.post("/", cursosPost);

/*
router.delete(
  "/:id",
  [
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(existeUsuarioPorId),
    validarCampos,
  ],
  usuariosDelete
);
*/

module.exports = routerCursos;
