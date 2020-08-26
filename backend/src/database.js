//hago la conexion a la bd
import { mongoo } from "mongoose";
const mongoose = mongoo;
const URI = process.env.MONGODB_URI ?
    process.env.MONGODB_URI :
    "mongodb://localhost/databasetest";
mongoose.conect( /*URI*/ );

const conection = mongoose.connection();

connection.once("open", () => {
    console.log("DB conected");
});