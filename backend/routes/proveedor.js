const { Router } = require("express");

const {
  proveedorGet,
  proveedorPut,
  proveedorPost,
  proveedorGetById,
  proveedorDelete
} = require("../controllers/proveedor");

const routerProveedor = Router();

routerProveedor.get("/", proveedorGet);
routerProveedor.get("/:id", proveedorGetById);
routerProveedor.put("/:id", proveedorPut);
routerProveedor.post("/", proveedorPost);
routerProveedor.delete("/:id", proveedorDelete);

module.exports = routerProveedor;
