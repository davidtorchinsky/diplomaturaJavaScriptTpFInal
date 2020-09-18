"use strict";

import express from "express";
const api = express.Router();
import UsuarioController from "../controllers/usuario";

// GETS
api.get("/", UsuarioController.getUsuarios);
api.get("/:emailUsuario", UsuarioController.getUsuario);
api.get("/login:", UsuarioController.getLogin);
api.get("/logout", UsuarioController.getLogout);

// PATCH o PUT
api.patch("/:emailUsuario", UsuarioController.editarUsuario);

// POST
api.post("/", UsuarioController.cargarUsuario);

// DELETE
api.delete("/:emailUsuario", UsuarioController.eliminarUsuario);

module.exports = api;