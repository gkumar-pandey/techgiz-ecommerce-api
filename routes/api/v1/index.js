const express = require("express");
const routes = express.Router();
const authRoutes = require("./auth.route");
const userRoutes = require("./user.route");


routes.use("/auth", authRoutes);
routes.use("/users", userRoutes);

module.exports = routes;
