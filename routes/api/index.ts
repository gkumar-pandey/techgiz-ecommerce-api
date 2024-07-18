import express from "express";
const routes = express.Router();

routes.use("/v1", require("./v1"));

export default routes;
