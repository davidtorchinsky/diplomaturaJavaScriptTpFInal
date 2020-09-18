"use strict";

import express from "express";
const router = express.Router();
import MemeController from "../controllers/meme";

// GETS
router.get("/", MemeController.getMemes); //obtengo todos los meme
router.get("/memesUsuario/:idUsuario", MemeController.getMemesUsuario); // obtengo todos los memes de un determinado usuario
router.get("/:idMeme", MemeController.getMeme);
router.get("/buscarPorCategoria/:categoria", MemeController.getMemesCategoria);

// PATCH o PUT
/* router.patch("/", MemeController.editarMeme); */
router.patch("/upVote/:idMeme/:emailUsuario", MemeController.upVotes);
router.patch("/downVote/:idMeme/:emailUsuario", MemeController.downVotes);

// POST
router.post("/", MemeController.cargarMeme);
//cargo un comentario al meme esto me hace ruido..
/* router.post("/cargarComentario/:", MemeController.cargarMeme); */

// DELETE
/* router.delete("/:idMeme", MemeController.eliminarMeme); */

module.exports = router;