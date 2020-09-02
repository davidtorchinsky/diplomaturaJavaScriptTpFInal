"use strict";

import Meme from "../Models/meme";
import Usuario from "../Models/usuario";

function getMemes(req, res) {
    Meme.find({}, function(err, memes) {
        if (err) {
            return res.status(400).json({
                title: "Error bad request",
                error: err,
            });
        }
        if (!memes) {
            return res.status(404).json({
                title: "Error not found",
                error: err,
            });
        }
        res.status(200).json({
            message: "Success",
            obj: memes,
        });
    });
}

function getMemeUsuario(req, res) {
    console.log("me llega al memeUsuario " + req.params.idUsuario);

    Meme.find({ usuario: req.params.idUsuario }, function(err, memes) {
        if (err) {
            return res.status(400).json({
                title: "Error bad request",
                error: err,
            });
        }
        if (!memes) {
            return res.status(404).json({
                title: "Error not found",
                error: err,
            });
        }
        res.status(200).json({
            message: "Success",
            obj: memes,
        });
    });
}

function getMeme(req, res) {
    Meme.findById(req.params.idMeme, function(err, meme) {
        if (err) {
            return res.status(400).json({
                title: "Error bad request",
                error: err,
            });
        }
        if (!meme) {
            return res.status(404).json({
                title: "Error not found",
                error: err,
            });
        }
        res.status(200).json({
            message: "Success",
            obj: meme,
        });
    });
}

function getMemesCategoria(req, res) {
    console.log("entre a categoria con " + req.params);
    Meme.find({ categoria: req.params.categoria }, function(err, memes) {
        if (err) {
            return res.status(400).json({
                title: "Error bad request",
                error: err,
            });
        }
        if (!memes) {
            return res.status(404).json({
                title: "Error not found",
                error: err,
            });
        }
        res.status(200).json({
            message: "Success",
            obj: memes,
        });
    });
}

function upVotes(req, res) {
    Meme.findByIdAndUpdate({ _id: req.params.idMeme }, function(err, meme) {
        if (err) {
            return res.status(400).json({
                title: "Error bad request",
                error: err,
            });
        }
        if (!meme) {
            return res.status(404).json({
                title: "Error not found",
                error: err,
            });
        }
        //Verifico en los votos positivos y negativos que el usuario no haya votado
        if (
            meme.upVotes.indexOf(req.params.email) != -1 &&
            meme.downVotes.indexOf(req.params.email) != -1
        ) {
            meme.upVotes.push(req.params.email);
        } else {
            res.status(200).json({
                message: "El usuario ya ha votado",
            });
        }
    });
}

function downVotes(req, res) {
    Meme.findByIdAndUpdate({ _id: req.params.idMeme }, function(err, meme) {
        if (err) {
            return res.status(400).json({
                title: "Error bad request",
                error: err,
            });
        }
        if (!meme) {
            return res.status(404).json({
                title: "Error not found",
                error: err,
            });
        }
        //Verifico en los votos positivos y negativos que el usuario no haya votado
        if (
            meme.upVotes.indexOf(req.params.email) != -1 &&
            meme.downVotes.indexOf(req.params.email) != -1
        ) {
            meme.downVotes.push(req.params.email);
        } else {
            res.status(200).json({
                message: "El usuario ya ha votado",
            });
        }
    });
}

function cargarMeme(req, res) {
    console.log(req.body);
    if (!req.body.fechaMeme) {
        return res.status(400).json({
            title: "Error",
            error: "No ingreso fecha",
        });
    }
    if (!req.body.titulo) {
        return res.status(400).json({
            title: "Error",
            error: "No ingreso titulo",
        });
    }
    if (!req.body.categoria) {
        return res.status(400).json({
            title: "Error",
            error: "No ingreso categoria",
        });
    }
    if (!req.body.memeUrl) {
        return res.status(400).json({
            title: "Error",
            error: "No ingreso la url del meme",
        });
    }
    if (!req.body.idUsuario) {
        return res.status(400).json({
            title: "Error",
            error: "No ingreso usuario",
        });
    }

    Meme.countDocuments({}, function(err, count) {
        if (err) {
            console.log("error de count");
            return handleError(err);
        } //handle possible errors
        //and do some other fancy stuff
        console.log("Cantidad de memes " + count);
        var num = count + 1;
        var nuevoMeme = new Meme({
            nuemero: num,
            upVotes: [],
            downVotes: [],
            fecha: req.body.fechaMeme,
            memeUrl: req.body.memeUrl,
            titulo: req.body.titulo,
            categoria: req.body.categoria,
            comentarios: [],
            usuario: req.body.idUsuario,
        });
        console.log("El nuevo meme es" + nuevoMeme);

        nuevoMeme.save().then(
            function(nuevoMeme) {
                res.status(201).json({
                    message: "Meme creado",
                    obj: nuevoMeme,
                });
            },
            function(err) {
                return res.status(400).json({
                    title: "Error al guardar el meme",
                    error: err,
                });
            }
        );
    });
}

// EXPORT
module.exports = {
    getMemes,
    getMemeUsuario,
    getMeme,
    getMemesCategoria,
    upVotes,
    downVotes,
    cargarMeme,
};