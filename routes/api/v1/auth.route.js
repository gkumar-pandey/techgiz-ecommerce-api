const express = require("express");
const { signupHandler, loginHandler } = require("../../../controllers");

const authRoutes = express.Router();

// POST /api/v1/auth/signup - signup route
authRoutes.post("/signup", signupHandler);

// POST /api/v1/auth/login - login route
authRoutes.post("/login", loginHandler);

module.exports = authRoutes;
