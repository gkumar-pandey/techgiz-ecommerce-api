import User from "../models/user";
import {
  createUserValidation,
  loginUserValidation,
} from "../services/validation";
import { ValidationError } from "joi";
import { comparePassword, generateToken, hashPassword } from "../utils";

/**
 * @description Handles user signup by validating user data by predefined user schema with joi, hash the password create a new account and generate an authentication token.
 * @route POST /api/v1/auth/signup
 * @param {Object} req - Express request object having user data in body.
 * @param {Object} res - Express response object containing user data and token
 * @returns - Express res or Error
 */
const signupHandler = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    // validate user schema
    await createUserValidation.validateAsync(userData);
    // check use exists
    const isUserExist = await User.findOne({ email: userData.email });
    if (isUserExist) {
      return res
        .status(400)
        .json({ success: false, message: "User Already exists" });
    }
    // hash plain text password
    const hashedPass = await hashPassword(userData.password);
    // create user
    const newUser = new User({ ...userData, password: hashedPass });
    await newUser.save();
    const token = generateToken({ email: newUser.email, _id: newUser._id });
    // Hide password
    newUser.password = undefined;
    return res
      .status(201)
      .json({ message: "sign up successfully", user: newUser, token });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).send({ message: error.message });
    }
    res
      .status(500)
      .json({ success: false, message: "Internal server error.", error });
    throw error;
  }
};

/**
 * @description Handles user authentication login
 * @route /api/v1/auth/login
 * @param {Object} req -Express request containing user login data.
 * @param {Object} res -Express response containing success message, token and user data after login.
 * @returns Express response or error message
 */
const loginHandler = async (req, res) => {
  try {
    const userData = req.body;
    await loginUserValidation.validateAsync(userData);
    const foundUser = await User.findOne({ email: userData.email });
    if (!foundUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not exist" });
    }
    // check password matched
    const isPasswordMatched = await comparePassword(
      userData.password,
      foundUser.password
    );
    if (!isPasswordMatched) {
      return res
        .status(400)
        .json({ success: false, message: "Password not matched" });
    }
    // generate token
    const token = generateToken({ email: foundUser.email, _id: foundUser._id });
    // hide password
    foundUser.password = undefined;
    return res.status(200).json({
      success: true,
      message: "Login successfully",
      user: foundUser,
      token,
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({ error: error.message });
    }
    res
      .status(500)
      .json({ message: "Internal server error", error, success: false });
    throw new Error(error);
  }
};

export { signupHandler, loginHandler };
