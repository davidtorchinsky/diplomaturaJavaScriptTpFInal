"use strict";

import Usuario from "../Models/usuario";
import Meme from "../Models/meme";

function getUsuarios(req, res) {
    Usuario.find({}, function(err, usuarios) {
        if (err) {
            return res.status(400).json({
                title: "Error bad request",
                error: err,
            });
        }
        if (!usuarios) {
            return res.status(404).json({
                title: "Error not found",
                error: err,
            });
        }

        res.status(200).json({
            message: "Success",
            obj: usuarios,
        });
    });
}

function getUsuario(req, res) {
    console.log("entre a buscar un solo usuario");
    Usuario.find({ mail: req.params.emailUsuario }).exec(function(
        error,
        usuario
    ) {
        if (error) {
            return res.status(400).json({
                title: "Error bad request",
                error: error,
            });
        }

        res.status(200).json({
            message: "Success",
            obj: usuario,
        });
    });
}

//login y logout
//editar usuario
function asignarMeme(req, res) {
    //Asocio el meme al usuario
    Usuario.find({
        mail: req.params.emailUsuario,
        async function(err, usuario) {
            if (err) {
                return res.status(400).json({
                    title: "An error occurred",
                    error: err,
                });
            }
            if (!usuario) {
                return res.status(404).json({
                    title: "Error",
                    error: "Usuario no encontrado",
                });
            }

            var x = await req.body.idMeme.findIndex((idMeme) => {
                usuario.meme.push(idMeme);
            });
            usuario.save().then(
                function(usuario) {
                    //Asocio el usuario al meme
                    Meme.find({ _id: { $in: req.body.idMeme } }, async function(
                        err,
                        memes
                    ) {
                        if (err) {
                            return res.status(400).json({
                                title: "An error occurred",
                                error: err,
                            });
                        }

                        if (!memes) {
                            return res.status(404).json({
                                title: "Error",
                                error: "meme no encontrado",
                            });
                        }

                        var x = await memes.findIndex((meme) => {
                            meme.usuarios.push(req.params.idUsuario);
                            meme.save();
                        });

                        res.status(200).json({
                            message: "Success",
                            obj: memes,
                        });
                    });
                },
                function(err) {
                    return res.status(404).json({
                        title: "Error",
                        error: err,
                    });
                }
            );
        },
    });
}

function cargarUsuario(req, res) {
    console.log("entre a cargar controller");
    console.log(req.body);
    if (!req.body.email) {
        return res.status(400).json({
            title: "Error bad request",
            error: "No igreseo mail",
        });
    }
    if (!req.body.pasword) {
        return res.status(400).json({
            title: "Error bad request",
            error: "No ingreso el pasword",
        });
    }
    if (!req.body.logo) {
        return res.status(400).json({
            title: "Error bad request",
            error: "No se cargo el mail",
        });
    }

    var nuevoUsuario = new Usuario({
        mail: req.body.email,
        password: req.body.password,
        logoUrl: req.body.logo,
    });
    console.log("voy a cargar el usuario");
    nuevoUsuario.save().then(function(nuevoUsuario) {
        res.status(201).json({
            message: "Usuario creado",
            obj: nuevoUsuario,
        });
    });
}

// EXPORT
module.exports = {
    getUsuarios,
    getUsuario,
    //getLogin,
    //getLogout,
    //editarUsuario,
    asignarMeme,
    cargarUsuario,

    //eliminarUsuario,
};