import express from "express";

const routes = express.Router();

import v1 from "./v1";

routes.use("/v1", v1);

export default routes;
