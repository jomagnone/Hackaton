const { Router } = require("express");
const { check } = require("express-validator");

const { validarCampos } = require("../middlewares/validar-campos");
const {
  esRoleValido,
  existeUsuarioPorId,
} = require("../helpers/db-validators");

const {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosLogin,
} = require("../controllers/usuarios");

const router = Router();

router.get("/", usuariosGet);
router.put("/:id",usuariosPut);
router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("apellido", "El apellido es obligatorio").not().isEmpty(),
    check("password", "El password es obligatorio y mas de 6 letras").isLength({
      min: 6,
    }),
    check("legajo", "El legajo es obligatorio").not().isEmpty(),
    // [check("rol", "No es un rol permitido").isIn(["ADMIN_ROLE", "USER_ROLE"])],
    check("rol").custom(esRoleValido),
    validarCampos,
  ],
  usuariosPost
);
router.delete("/:id",usuariosDelete);

router.post(
  "/login",
  [
    check("legajo", "El legajo es obligatorio").not().isEmpty(),
    check("password", "El password es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  usuariosLogin
);

module.exports = router;
