"use strict";

import express from "express";
const router = express.Router();
import UsuarioController from "../controllers/usuario";

// GETS

router.get("/", UsuarioController.getUsuarios);
router.get("/:emailUsuario", UsuarioController.getUsuario);

//router.get("/:login", UsuarioController.getLogin);
//router.get("/:logout", UsuarioController.getLogout);

// PATCH o PUT
//router.put("/:emailUsuario", UsuarioController.editarUsuario);
router.patch("/asignarMeme/:emailUsuario", UsuarioController.asignarMeme);

// POST
router.post("/", UsuarioController.cargarUsuario);

// DELETE
//router.delete("/:emailUsuario", UsuarioController.eliminarUsuario);

module.exports = router;