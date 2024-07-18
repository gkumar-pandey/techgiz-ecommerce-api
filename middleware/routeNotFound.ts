import {Request,Response} from "express"

const routeNotFound = (req:Request, res:Response) => {
  return res.status(404).json("Route not found");
};

export default routeNotFound
