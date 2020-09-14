import express from "express";
import cors from "cors";
import {} from "dotenv/config";
import comentarioRoutes from "./routes/comentario";
import usuarioRoutes from "./routes/usuario";
import memeRoutes from "./routes/meme";
import passport from "passport";
import bcrypt from "bcrypt";
import User from "./Models/usuario";
import authRoutes from "./routes/auth";
import Usuario from "./Models/usuario";

const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const GoogleStrategy = require("passport-google-oauth20").Strategy;

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
      // console.log("mail enviado " + mail);
      // console.log("pass enviado " + password);
      User.findOne({ mail: mail })
        .then((data) => {
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
    User.findOne({ mail: jwt_payload.mail })
      .then((data) => {
        if (!data) {
          console.log("retorna false jwt");
          done(null, false);
        } else {
          console.log("Retorna data:" + data);
          done(null, data);
        }
      })
      .catch((err) => done(err, null));
  })
);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.Google_ClientId,
      clientSecret: process.env.Google_ClientSecret,
      callbackURL: "http://localhost:4000/auth/google/callback",
      session: false,
      scope: ["email"],
    },
    async function (req, accessToken, refreshToken, profile, done) {
      console.log("Estrategia Google");
      console.log("profile " + JSON.stringify(profile));
      console.log("profile.email 2 " + profile.emails[0].value);

      const usuarioEncontrado = await User.find(
        { mail: profile.emails[0].value },
        function (err, usr) {
          // Si encuentra usuario o error lo devuelve
          console.log("err " + err);
          console.log("usr " + usr[0].mail);
          if (err || usr[0].mail) {
            console.log("devuelve error o usuario encontrado");
            return done(err, usr);
          }
        }
      ).catch((err) => {
        return err;
      });
      if (usuarioEncontrado) {
        console.log("usuario Encontrado " + usuarioEncontrado);
        return done(false, usuarioEncontrado);
      } else {
        //Si no encuentra el usuario, lo crea y lo devuelve.
        console.log("profile.email " + profile.email);
        const nuevoUser = new User({
          mail: profile.emails[0].value,
          password: null,
        });
        const usrCreado = await nuevoUser.save().catch((err) => {
          return err;
        });
        console.log("usuario nuevo " + usrCreado);
        return done(false, usrCreado);
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
//middlewares
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

//routes
app.use("/comentario", comentarioRoutes);
app.use("/usuario", usuarioRoutes);
app.use("/meme", memeRoutes);
app.use("/auth", authRoutes); // passport.authenticate("jwt", { session: false }), authRoutes);

module.exports = app;
