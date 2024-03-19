const { decodeToken, extractUserIdFromDecodedToken } = require("../utils");

const authVerification = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = decodeToken(token);
    const useId = extractUserIdFromDecodedToken(decodedToken);
    req.userId = useId;
    return next();
  } catch (error) {
    res
      .status(401)
      .json({ success: false, message: "Please provide auth token", error });
    throw new Error(error);
  }
};

module.exports = {
  authVerification,
};
