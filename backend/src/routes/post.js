"use strict";

import express from "express";
const api = express.Router();
import PostController from "../controllers/post";

// GETS
api.get("/", PostController.getPost);
api.get("/:idUsuario", PostController.getPostUsuario);
api.get("/:idPost", PostController.getPost);

// PATCH o PUT
api.patch("/", PostController.editarPost);
api.patch("/upVote/:idPost/:idUsuario", PostController.upVotes);
api.patch("/downVote/:idPost/:idUsuario", PostController.downVotes);

// POST
api.post("/", PostController.cargarPost);
//cargo un comentario al post esto me hace ruido..
api.post("/cargarComentario/:", PostController.cargarPost);

// DELETE
api.delete("/:idPost", PostController.eliminarPost);

module.exports = api;