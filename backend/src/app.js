import express from "express";
import cors from "cors";
import session from "express-session";

import comentarioRoutes from "./routes/comentario";
import usuarioRoutes from "./routes/usuario";
import memeRoutes from "./routes/meme";

// Inicializo
const app = express();

//settings
app.set("port", process.eventNames.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: "secretoApp11GAG",
    resave: true,
    saveUninitialized: true,
  })
);

app.use("/comentario", comentarioRoutes);
app.use("/usuario", usuarioRoutes);
app.use("/meme", memeRoutes);
//routes

module.exports = app;
