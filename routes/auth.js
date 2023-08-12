var express = require("express");
var router = express.Router();
const AuthController = require("../controllers/v1/auth");
const { registerUserSchema, loginUserSchema } = require("../joi_schemas/auth");
const validationMiddleware = require("../middlewears/validationMW");

//Sub routes

//using validationMiddleware for verifying getting correct information from frontend
router.post(
  "/register",
  validationMiddleware(registerUserSchema),
  AuthController.registerUser
);
router.post(
  "/login",
  validationMiddleware(loginUserSchema),
  AuthController.login
);

module.exports = router;
