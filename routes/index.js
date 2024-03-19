const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.send("Hello world");
});
routes.use("/api", require("./api"));

module.exports = routes;
