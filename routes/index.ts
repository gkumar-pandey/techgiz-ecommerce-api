import express, { Request, Response } from "express";

const routes = express.Router();

routes.get("/", (req: Request, res: Response) => {
  return res.send("Hello world");
});
routes.use("/api", require("./api"));

export default routes;
