import { Response, Request, NextFunction } from "express";
import { decodeToken, extractUserIdFromDecodedToken } from "../utils";

const authVerification = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = decodeToken(token);
    const useId = extractUserIdFromDecodedToken(decodedToken);
    req.userId = useId;
    return next();
  } catch (error: any) {
    res
      .status(401)
      .json({ success: false, message: "Please provide auth token", error });
    throw new Error(error);
  }
};

export default authVerification;
