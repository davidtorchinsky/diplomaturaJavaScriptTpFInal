"use strict";

import Comentario from "../Models/comentario";
import Usuario from "../Models/usuario";
import Meme from "../Models/meme";

function getComentarios(req, res) {
    console.log("entre a get comentarios");
    Comentario.find({}, function(err, comentarios) {
        if (err) {
            return res.status(400).json({
                title: "Error bad request",
                error: err,
            });
        }
        if (!comentarios) {
            return res.status(404).json({
                title: "Error not found",
                error: err,
            });
        }
        res.status(200).json({
            message: "Success",
            obj: comentarios,
        });
    });
}

function getComentariosUsuarios(req, res) {
    Usuario.findById({ _id: req.params.idUsuario }).exec(function(
        error,
        usuario
    ) {
        if (error) {
            return res.status(400).json({
                title: "Error bad request",
                error: error,
            });
        }
        Comentario.find({ _id: { $in: usuario.comentarios } }, function(
            err,
            comentarios
        ) {
            if (err) {
                return res.status(400).json({
                    title: "Error bad request",
                    error: err,
                });
            }
            if (!comentarios) {
                return res.status(404).json({
                    title: "Error not found",
                    error: err,
                });
            }
            res.status(200).json({
                message: "Success",
                obj: comentarios,
            });
        });
    });
}

async function cargarComentario(req, res) {
    if (!req.body.autor) {
        return res.status(400).json({
            title: "Error bad request",
            error: "No ingreseo el usuario",
        });
    }
    if (!req.body.numero) {
        return res.status(400).json({
            title: "Error bad request",
            error: "no ingreso el numero",
        });
    }
    if (!req.body.coment) {
        return res.status(400).json({
            title: "Error bad request",
            error: "no ingreso el contenido",
        });
    }
    if (!req.body.fecha) {
        return res.status(400).json({
            title: "Error bad request",
            error: "no ingreso una fecha",
        });
    }
    if (!req.params.idMeme) {
        return res.status(400).json({
            title: "Error bad request",
            error: "no ingreso un id Meme",
        });
    }

    var nuevoComentario = new Comentario({
        autor: req.body.autor,
        numero: req.body.numero,
        coment: req.body.coment,
        fecha: req.body.fecha,
        idMeme: req.params.idMeme,
        comentarios: [],
    });
    /*Cargo el comentario en el meme */
    await Meme.updateOne({ _id: req.params.idMeme }, { $push: { comentarios: nuevoComentario } });

    //Cargo el comenario en la BD

    await nuevoComentario.save().then(function(nuevoComentario) {
        res.status(201).json({
            message: "Comentario creado",
            obj: nuevoComentario,
        });
    });
}

function responderComentario(req, res) {
    if (!req.body.autor) {
        return res.status(400).json({
            title: "Error bad request",
            error: err,
        });
    }
    if (!req.body.numero) {
        return res.status(400).json({
            title: "Error bad request",
            error: err,
        });
    }
    if (!req.body.coment) {
        return res.status(400).json({
            title: "Error bad request",
            error: err,
        });
    }
    if (!req.body.fecha) {
        return res.status(400).json({
            title: "Error bad request",
            error: err,
        });
    }

    var nuevoComentario = new Comentario({
        dni: req.body.autor,
        nombre: req.body.numero,
        apellido: req.body.coment,
        telefono: req.body.fecha,
        comentarios: [],
    });

    Comentario.findById({ _id: req.params.idComentario }).exec(function(
        error,
        comentario
    ) {
        if (error) {
            return res.status(400).json({
                title: "Error bad request",
                error: error,
            });
        }

        comentario.comentarios.push(nuevoComentario);
    });
}

// EXPORT
module.exports = {
    getComentarios,
    getComentariosUsuarios,
    cargarComentario,
    responderComentario,
};