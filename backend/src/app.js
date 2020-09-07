import express from "express";
import cors from "cors";
import {} from "dotenv/config";
import comentarioRoutes from "./routes/comentario";
import usuarioRoutes from "./routes/usuario";
import memeRoutes from "./routes/meme";
import authRoutes from "./routes/auth";
import passport from "passport";
import bcrypt from "bcrypt";
import User from "./Models/usuario";

const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

// Inicializo
const app = express();

//settings
app.set("port", process.eventNames.PORT || 4000);

passport.use(
  new LocalStrategy(
    {
      usernameField: "mail",
      passwordField: "password",
      session: false,
    },
    (mail, password, done) => {
      console.log("Estrategia Local");
      console.log("mail enviado " + mail);
      console.log("pass enviado " + password);
      User.findOne({ mail: mail })
        .then((data) => {
          //console.log("data " + data);
          //console.log(
          //  "comparar hash " +
          //    bcrypt.hashSync(
          //      req.body.password,
          //      parseInt(process.env.BCRYPT_ROUNDS)
          //    )
          //);
          if (!data) {
            console.log("No Data");
            return done(null, false);
          } else if (!bcrypt.compareSync(password, data.password)) {
            console.log("no coincide pass");
            return done(null, false);
          } else {
            console.log("retorna data");
            return done(null, data);
          }
        })
        .catch((err) => done(err, null));
    }
  )
);

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
opts.algorithms = [process.env.JWT_ALGORITHM];

passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    console.log("Estrategia JWT");
    User.findOne({ _id: jwt_payload.sub })
      .then((data) => {
        if (!data) {
          return done(null, false);
        } else return done(null, data);
      })
      .catch((err) => done(err, null));
  })
);
//middlewares
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

//routes
app.use("/comentario", comentarioRoutes);
app.use("/usuario", usuarioRoutes);
app.use("/meme", memeRoutes);
app.use("/auth", authRoutes);

module.exports = app;
