//hago la conexion a la bd
const mongoose = require("mongoose");

console.log(process.env.MONGODB_URI);
const URI = process.env.MONGODB_URI ?
    process.env.MONGODB_URI :
    "mongodb://localhost/11gag";
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