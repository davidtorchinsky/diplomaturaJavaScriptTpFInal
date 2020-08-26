"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Esquema Categoria
var CategoriaSchema = Schema({
    nombre: {
        type: String,
        unique: true,
    },
    descripcion: String,
    //ver esta parte
    logo: String,

    //Relacion con Post
    post: [{
        type: Schema.Types.ObjectId,
        ref: "Post",
    }, ],
});
var Categoria = mongoose.model("Categoria", CategoriaSchema);

module.exports = Categoria;