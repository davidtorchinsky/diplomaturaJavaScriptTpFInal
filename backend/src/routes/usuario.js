"use strict";

import express from "express";
const router = express.Router();
import UsuarioController from "../controllers/usuario";

// GETS
//router.get("/login", UsuarioController.getLogin);
router.get("/logout", UsuarioController.getLogout);

// Ruta segura para probar JWT
router.get("/profile", (req, res) => {
  console.log(req);
  res.json({
    message: "Ruta segura OK",
    mail: req.user.mail,
  });
});

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
