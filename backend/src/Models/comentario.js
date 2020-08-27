"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Esquema Comentario
var ComentarioSchema = new Schema({
    autor: String, // puede ser tambien el usuario embebido
    numero: Number,
    coment: String,
    fecha: Date,
    comentarios: [Comentario],
});
var Comentario = mongoose.model("Comentario", ComentarioSchema);

module.exports = Comentario;