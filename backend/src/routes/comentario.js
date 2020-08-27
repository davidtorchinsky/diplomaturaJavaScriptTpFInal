"use strict";

import express from "express";
const api = express.Router();
import ComentarioController from "../controller/comentario";
import Comentario from "../Models/comentario";

// GETS
api.get("/", ComentarioController.getComentarios);
api.get("/:idUsuario", ComentarioController.getComentariosUsuario);

// PATCH o PUT

// POST
api.post("/", ComentarioController.cargarComentario);
api.post("/:idComentario", ComentarioController.responderComentario);

// DELETE

module.exports = api;