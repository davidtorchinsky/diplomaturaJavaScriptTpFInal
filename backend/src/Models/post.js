"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Equema Comentario se hace asi o como? lo sacamos a un model aparte para poder hacer coment de coment
var Comentario = new Schema({
    autor: _idUsuario, // puede ser tambien el usuario embebido
    numero: Number,
    coment: String,
    fecha: Date,
    comentarios: [Comentario],
});

var PostSchema = Schema({
    numero: {
        type: Number,
        unique: true,
    },
    //Ver la verificacion con usuario
    upvotes: [Usuario],
    downvotes: [Usuario],
    fecha: Date,
    meme: url,
    titulo: String,
    categoria: [Categoria],

    comentarios: [Comentario],

    //Relacion con Usuario
    usuario: [{
        type: Schema.Types.ObjectId,
        ref: "Usuario",
    }, ],
});

var Post = mongoose.model("Post", PostSchema);