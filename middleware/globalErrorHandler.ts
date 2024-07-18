import { Request, Response } from "express";

const globalErrorHandler = (req: Request, res: Response) => {
  return res.status(500).json("Something went wrong!");
};

export default globalErrorHandler;
