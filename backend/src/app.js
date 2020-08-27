import express from "express";
import cors from "cors";

const app = express();

//settings
app.set("port", process.eventNames.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.get("/usuario", (req, res) => res.send("usuario"));

module.exports = app;