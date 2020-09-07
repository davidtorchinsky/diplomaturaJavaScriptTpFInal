import User from "../Models/usuario";
import bcrypt from "bcrypt";
import passport from "passport";
import {} from "dotenv/config";
import jwt from "jsonwebtoken";

const register = (req, res, next) => {
  console.log("Registro de usuarios");
  User.findOne({ mail: req.body.mail })
    .then((usuario) => {
      if (usuario) {
        res.send("Error: Ya existe el usuario");
      } else {
        console.log("Creando el usuario");
        const hash = bcrypt.hashSync(
          req.body.password,
          parseInt(process.env.BCRYPT_ROUNDS)
        );
        console.log("Hash : " + hash);
        const newUser = new User({
          mail: req.body.mail,
          username: req.body.username,
          password: hash,
        });
        return newUser.save();
      }
    })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((err) => {
      next(err);
    });
};

const login = (req, res, next) => {
  console.log("login");
  passport.authenticate("local", { session: false }, (err, user) => {
    console.log("autenticando Local");

    if (err || !user) {
      next(res.send("usuario o contraseña incorrectos"));
    } else {
      console.log("Generación del token");
      const payload = {
        sub: user._id,
        exp: Date.now() + parseInt(process.env.JWT_LIFETIME),
        username: user.username,
      };

      const token = jwt.sign(JSON.stringify(payload), process.env.JWT_SECRET, {
        algorithm: process.env.JWT_ALGORITHM,
      });
      res.json({ data: { token: token } });
    }
  })(req, res);
};

function auth(req, res) {
  res.send(process.env);
}
function authLocal(req, res) {
  res.send("Local");
}
function authGoogle(req, res) {
  res.send("AuthGoogle");
}
function googleRedirect(req, res) {
  res.send("google Redirect");
}
function signin(req, res) {
  res.send("ingresando a la app");
}

function signup(req, res) {
  res.send("Formulario autenticación");
}

export default {
  auth,
  authLocal,
  authGoogle,
  googleRedirect,
  signin,
  signup,
  login,
  register,
};
