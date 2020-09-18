"use strict";

import Meme from "../Models/meme";
import Usuario from "../Models/usuario";

function getMemes(req, res) {
    console.log("Entre a memem");
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

function getMemesUsuario(req, res) {
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
    Meme.find({ _id: req.params.idMeme }, function(err, meme) {
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
            meme[0].upvotes.indexOf(req.params.emailUsuario) === -1 &&
            meme[0].downvotes.indexOf(req.params.emailUsuario) === -1
        ) {
            //Otra forma de cargar el voto que tampoco nos esta funcionando Meme.updateOne({ _id: req.params.idMeme }, { $push: { upvotes: req.params.emailUsuario } });
            meme[0].upvotes.push(req.params.emailUsuario);
            meme[0].save().then(
                function(meme) {
                    res.status(201).json({
                        message: "Voto Cargado al meme",
                        obj: meme,
                    });
                },
                function(err) {
                    return res.status(400).json({
                        title: "Error al guardar el meme",
                        error: err,
                    });
                }
            );
        } else {
            if (
                meme[0].downvotes.indexOf(req.params.emailUsuario) != -1 &&
                meme[0].upvotes.indexOf(req.params.emailUsuario) === -1
            ) {
                meme[0].upvotes.push(req.params.emailUsuario);

                meme[0].downvotes.splice(
                    meme[0].downvotes.indexOf(req.params.emailUsuario),
                    1
                );
                meme[0].save().then(
                    function(meme) {
                        res.status(201).json({
                            message: "Voto Cargado al meme",
                            obj: meme,
                        });
                    },
                    function(err) {
                        return res.status(400).json({
                            title: "Error al guardar el meme",
                            error: err,
                        });
                    }
                );
            } else {
                return res.status(200).json({
                    message: "El usuario ya ha votado",
                });
            }
        }
    });
}

function downVotes(req, res) {
    Meme.find({ _id: req.params.idMeme }, function(err, meme) {
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
            meme[0].upvotes.indexOf(req.params.emailUsuario) === -1 &&
            meme[0].downvotes.indexOf(req.params.emailUsuario) === -1
        ) {
            //Otra forma de cargar el voto que tampoco nos esta funcionando Meme.updateOne({ _id: req.params.idMeme }, { $push: { upvotes: req.params.emailUsuario } });
            meme[0].downvotes.push(req.params.emailUsuario);
            meme[0].save().then(
                function(meme) {
                    res.status(201).json({
                        message: "Voto Cargado al meme",
                        obj: meme,
                    });
                },
                function(err) {
                    return res.status(400).json({
                        title: "Error al guardar el meme",
                        error: err,
                    });
                }
            );
        } else {
            if (
                meme[0].upvotes.indexOf(req.params.emailUsuario) != -1 &&
                meme[0].downvotes.indexOf(req.params.emailUsuario) === -1
            ) {
                meme[0].downvotes.push(req.params.emailUsuario);
                meme[0].upvotes.splice(
                    meme[0].downvotes.indexOf(req.params.emailUsuario),
                    1
                );
                meme[0].save().then(
                    function(meme) {
                        res.status(201).json({
                            message: "Voto Cargado al meme",
                            obj: meme,
                        });
                    },
                    function(err) {
                        return res.status(400).json({
                            title: "Error al guardar el meme",
                            error: err,
                        });
                    }
                );
            } else {
                return res.status(200).json({
                    message: "El usuario ya ha votado",
                });
            }
        }
    });
}

function cargarMeme(req, res) {
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

function getMemesMasVotados(req, res) {
    Meme.find({ $where: "this.upvotes.length > 0" }, function(err, memes) {
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
        })
        .sort({ upvotes: 1 })
        .limit(5);
}

// EXPORT
module.exports = {
    getMemes,
    getMemesUsuario,
    getMeme,
    getMemesCategoria,
    upVotes,
    downVotes,
    cargarMeme,
    getMemesMasVotados,
};