"use strict";

import { Comenta } from "../Models/comentario";
import { Usu } from "../Models/usuario";

var Comentario = Comenta;
var Usuario = Usu;

function getComentarios(req, res) {
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

function cargarComentario(req, res) {
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

    nuevoComentario.save().then(function(nuevoComentario) {
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