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
    numero: Number,

    upvotes: [{ type: String }], //guardo el Usuario email
    downvotes: [{ type: String }],
    fecha: Date,
    memeUrl: String,
    titulo: String,
    categoria: String, //String

    //comentarios: [comentario],

    //Relacion con Comentario
    comentarios: [{
        type: Schema.Types.ObjectId,
        ref: "Comentario",
    }, ],

    //Relacion con Usuario
    usuario: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
    },
});

var Meme = mongoose.model("Meme", MemeSchema);
module.exports = Meme;