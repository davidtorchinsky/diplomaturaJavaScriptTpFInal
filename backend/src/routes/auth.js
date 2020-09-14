"use strict";

import express from "express";
const router = express.Router();
import jwt from "jsonwebtoken";
import UsuarioController from "../controllers/usuario";
import passport from "passport";
import {} from "dotenv/config";

// Ruta segura para probar JWT
router.get("/profile", (req, res) => {
  console.log(req);
  res.json({
    message: "Ruta segura OK",
    mail: req.user.mail,
  });
});

router.get("/google", passport.authenticate("google", { session: false }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/usuario/login" }),
  function (req, res) {
    // Autenticacion OK Redirecciono
    console.log("req callback " + req.user[0]._id);
    const payload = {
      sub: req.user[0]._id,
      exp: Date.now() + parseInt(process.env.JWT_LIFETIME),
      mail: req.user[0].mail,
    };

    const token = jwt.sign(JSON.stringify(payload), process.env.JWT_SECRET, {
      algorithm: process.env.JWT_ALGORITHM,
    });
    res.status(200).json({ data: { token: token } });
  }
);
module.exports = router;
