import express from "express";
import cors from "cors";
import comentarioRoutes from "./routes/comentario";
import usuarioRoutes from "./routes/usuario";
import memeRoutes from "./routes/meme";

const app = express();

//settings
app.set("port", process.eventNames.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());

app.use("/comentario", comentarioRoutes);
app.use("/usuario", usuarioRoutes);
app.use("/meme", memeRoutes);
//routes

module.exports = app;