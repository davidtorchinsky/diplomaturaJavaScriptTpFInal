"use strict";

import express from "express";
const router = express.Router();
import ComentarioController from "../controllers/comentario";
import Comentario from "../Models/comentario";

// GETS
router.get("/", ComentarioController.getComentarios);
//router.get("/:idUsuario", ComentarioController.getComentariosUsuario);

// PATCH o PUT

// POST
router.post("/:idMeme", ComentarioController.cargarComentario);
router.post("/:idComentario", ComentarioController.responderComentario);

// DELETE

module.exports = router;