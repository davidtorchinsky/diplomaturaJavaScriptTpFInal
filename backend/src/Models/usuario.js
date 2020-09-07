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
  googleId: String, //Agregados para estrategia google de Passport
  username: String, //Agregados para estrategia google de Passport
  //ver esta parte
  logoUrl: String,

  //Relacion con Meme
  //meme: [
  //  {
  //    type: Schema.Types.ObjectId,
  //    ref: "Meme",
  //  },
  //],

  //Relacion con comentarios
  //comentarios: [
  //  {
  //    type: Schema.Types.ObjectId,
  //    ref: "Comentario",
  //  },
  //],
});
var Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;
