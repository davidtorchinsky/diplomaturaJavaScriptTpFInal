"use strict";

import express from "express";
const router = express.Router();
import UsuarioController from "../controllers/usuario";

//otra forma de implementar las rutas
/* router
    .route("/")
    .get(UsuarioController.getUsuarios)
    .post(UsuarioController.asignarMeme);

router.route("/:emailUsuario").get(UsuarioController.getUsuario);

router.route("/asignarMeme/:emailUsuario").put(UsuarioController.asignarMeme); */
// GETS
router.get("/", UsuarioController.getUsuarios);
router.get("/:emailUsuario", UsuarioController.getUsuario);
router.get("/id/:idUsuario", UsuarioController.getUsuarioById);
//router.get("/login", UsuarioController.getLogin);
router.get("/logout", UsuarioController.getLogout);

//router.get("/:login", UsuarioController.getLogin);
//router.get("/:logout", UsuarioController.getLogout);

// PATCH o PUT
//router.put("/:emailUsuario", UsuarioController.editarUsuario);
router.patch("/asignarMeme/:emailUsuario", UsuarioController.asignarMeme);

// POST
router.post("/", UsuarioController.cargarUsuario);
router.post("/login", UsuarioController.getLogin);
router.post("/register", UsuarioController.register);

// DELETE
//router.delete("/:emailUsuario", UsuarioController.eliminarUsuario);

// AUTH
//router.get("/signin", UsuarioController.signin);
//router.get("/signup", UsuarioController.signup);

router.get("/", UsuarioController.getUsuarios);
router.get("/:emailUsuario", UsuarioController.getUsuario);
module.exports = router;
