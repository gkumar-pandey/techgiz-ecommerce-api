const express = require("express");
const routes = express.Router();
const authRoutes = require("./auth.route");

routes.use("/", (req, res) => {
  res.json("Hello express");
});

routes.use("/auth", authRoutes);

module.exports = routes;
