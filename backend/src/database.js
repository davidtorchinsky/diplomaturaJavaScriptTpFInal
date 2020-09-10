// Llamo a dotenv para que me cargue las variables locales cargadas en el archivo .env
// de la raiz
//require("dotenv").config();
import {} from "dotenv/config";

//hago la conexion a la bd
const mongoose = require("mongoose");

console.log("Mongo URI en .env" + process.env.MONGODB_URI);
console.log("Google ID : " + process.env.Google_ClientId);
const URI = process.env.MONGODB_URI;
//  ? process.env.MONGODB_URI
//  : "mongodb://localhost/11gag";
//lo que necesita mongoose para conectarse
mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("DB conected");
});
