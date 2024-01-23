const express = require("express");
const authRoutes = express.Router();

// POST /api/v1/auth/signup - signup route
authRoutes.post("/signup", async (req, res) => {});

// POST /api/v1/auth/login - login route
authRoutes.post("/login", async (req, res) => {});

module.exports = authRoutes;
