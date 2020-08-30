"use strict";

import express from "express";
const api = express.Router();
import MemeController from "../controllers/meme";

// GETS
api.get("/", MemeController.getMemes); //obtengo todos los meme
/* api.get("/:idUsuario", MemeController.getMemeUsuario);
api.get("/:idMeme", MemeController.getMeme);

// PATCH o PUT
api.patch("/", MemeController.editarMeme);
api.patch("/upVote/:idMeme/:idUsuario", MemeController.upVotes);
api.patch("/downVote/:idMeme/:idUsuario", MemeController.downVotes);

// POST
api.post("/", MemeController.cargarMeme);
//cargo un comentario al meme esto me hace ruido..
api.post("/cargarComentario/:", MemeController.cargarMeme);

// DELETE
api.delete("/:idMeme", MemeController.eliminarMeme); */

module.exports = api;