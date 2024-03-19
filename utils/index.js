const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
/**
 * @description Hash a plain text password using bcrypt
 * @param {String} plainTextPassword - The plain text password to hash.
 * @returns {String} hashed password
 * @throws {Error} - If Error occurs during hashing plain text password
 */
const hashPassword = async (plainTextPassword) => {
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
const comparePassword = async (password, existingPassword) => {
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
const generateToken = (payload) => {
  const SECRET_KEY = process.env.SECRET_KEY;
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
  return token;
};

/**
 * @description Decodes a JWT to extract the original payload.
 * @param {String} token - The JWT token to decode.
 * @returns {Object} - The decoded payload.
 */
const decodeToken = (token) => {
  const SECRET_KEY = process.env.SECRET_KEY;
  const decodedToken = jwt.verify(token, SECRET_KEY);
  return decodedToken;
};

/**
 * @description 
 * @param {*} decodedToken 
 * @returns 
 */
const extractUserIdFromDecodedToken = (decodedToken) => {
  if (decodeToken && decodeToken._id) {
    return decodeToken._id;
  } else {
    throw new Error("Invalid or missing user id in token");
  }
};

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
  decodeToken,
  extractUserIdFromDecodedToken
};
