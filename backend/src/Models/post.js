"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

/* var ComentarioSchema = new Schema({
    autor: String, // puede ser tambien el usuario embebido
    numero: Number,
    coment: String,
    fecha: Date,
    comentarios: [Comentario],
}); */

var PostSchema = Schema({
    numero: {
        type: Number,
        unique: true,
    },
    //Ver la verificacion con usuario
    upvotes: [usuario], //guardo el Usuario
    downvotes: [usuario],
    fecha: Date,
    memeUrl: String,
    titulo: String,
    categoria: [Categoria],

    comentarios: [comentario],

    //Relacion con Comentario
    comentariio: [{
        type: Schema.Types.ObjectId,
        ref: "Comentario",
    }, ],

    //Relacion con Usuario
    usuario: [{
        type: Schema.Types.ObjectId,
        ref: "Usuario",
    }, ],
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;