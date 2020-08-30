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

var MemeSchema = Schema({
    numero: {
        type: Number,
        unique: true,
    },
    //Ver la verificacion con usuario
    upvotes: [String], //guardo el Usuario
    downvotes: [String],
    fecha: Date,
    memeUrl: String,
    titulo: String,
    categoria: String, //String

    //comentarios: [comentario],

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

var Meme = mongoose.model("Meme", MemeSchema);
module.exports = Meme;