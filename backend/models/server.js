const express = require("express");
const cors = require("cors");

const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";
    this.cursosPath = "/api/cursos";
    this.asignacionPath = "/api/asignaciones";
    this.proveedorPath = "/api/proveedor";
    //Conectar la base de datos para
    this.conexDB();
    //Middlewares
    this.middlewares();

    //Rutas de mi aplicacion
    this.routes();
  }

  async conexDB() {
    await dbConnection();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Lectura y Parseo del body
    this.app.use(express.json());

    //Directorio publico
    this.app.use(express.static('public'));
    //this.app.use(express.static("public"));
  }
  

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
    this.app.use(this.cursosPath, require("../routes/cursos"));
    this.app.use(this.asignacionPath, require("../routes/asignaciones"));
    this.app.use(this.proveedorPath, require("../routes/proveedor"));

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
