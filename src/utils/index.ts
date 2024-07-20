import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
/**
 * @description Hash a plain text password using bcrypt
 * @param {String} plainTextPassword - The plain text password to hash.
 * @returns {String} hashed password
 * @throws {Error} - If Error occurs during hashing plain text password
 */
export const hashPassword = async (plainTextPassword: string) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(plainTextPassword, salt);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
};

/**
 * @description compare plain text password with hashed password for match
 * @param {String} password - The plain text password
 * @param {String} existingPassword - Hashed password stored in database.
 * @returns {Boolean} - True if the password matched, False otherwise.
 */
export const comparePassword = async (
  password: string,
  existingPassword: string
) => {
  try {
    const isPasswordMatched = await bcrypt.compare(password, existingPassword);
    return isPasswordMatched;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * @description Generate a JWT token using the provided payload.
 * @param {Object} payload - Object contains user id and email.
 * @returns {String} - The generated JWT Token
 */
export const generateToken = (payload: any) => {
  const SECRET_KEY = String(process.env.SECRET_KEY);
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
  return token;
};

/**
 * @description Decodes a JWT to extract the original payload.
 * @param {String} token - The JWT token to decode.
 * @returns {Object} - The decoded payload.
 */
export const decodeToken = (token: string)=> {
  const SECRET_KEY = String(process.env.SECRET_KEY);
  const decodedToken = jwt.verify(token, SECRET_KEY);
  return decodedToken;
};

/**
 * @description
 * @param {*} decodedToken
 * @returns
 */
export const extractUserIdFromDecodedToken = (decodedToken: any) => {
  if (decodedToken && decodedToken?._id) {
    return decodedToken?._id;
  } else {
    throw new Error("Invalid or missing user id in token");
  }
};
