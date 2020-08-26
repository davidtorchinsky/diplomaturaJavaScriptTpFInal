"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Esquema Usuario
var UsuarioSchema = Schema({
    mail: {
        type: String,
        unique: true,
    },
    password: String,

    //ver esta parte
    logo: url,

    //Relacion con Post
    post: [{
        type: Schema.Types.ObjectId,
        ref: "Post",
    }, ],
});
var Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;