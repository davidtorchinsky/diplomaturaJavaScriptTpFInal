"use strict";

import express from "express";
const router = express.Router();
import AuthController from "../controllers/auth";

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);
router.get("/", AuthController.auth);
router.get("/local", AuthController.authLocal);
router.get("/google", AuthController.authGoogle);
router.get("/google/redirect", AuthController.googleRedirect);

module.exports = router;
