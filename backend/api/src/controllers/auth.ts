import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";

import { TNewUser, TUser } from "../types/UserModelTypes";
import { createError } from "../utils/error";
import { ErrorMessage } from "../types/ErrorTypes";
import User from "../models/User";
import { Message } from "../types/Messages";
import { TResponse } from "../types/Response";

/**
 * Handles the registration of a new user.
 *
 * @param _req - The request object.
 * @param res - The response object.
 * @param next - The next function.
 * @returns A JSON response with the registered user's data.
 * @throws {Error} If validation fails or an error occurs during user creation.
 */
export const register = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const errors = validationResult(_req).array();

    if (errors.length > 0) {
      throw createError(ErrorMessage.ValidationFailed, 422, errors);
    }

    const newUserData: TNewUser = _req.body;
    newUserData.password = await bcrypt.hash(newUserData.password, 12);

    const newUser: TUser = await User.create(newUserData);

    const response: TResponse = { message: Message.UserRegisteredSuccessfully, data: newUser };

    res.status(201).json(response);
  } catch (error: any) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }

    next(error);
  }
};

/**
 * Handles the login functionality.
 *
 * @param {Request} _req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 */
export const login = (_req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred during login" });
  }
};

/**
 * Handles the user validate functionality.
 *
 * @param _req - The request object.
 * @param res - The response object.
 * @returns {void}
 */
export const validateUser = (_req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "User validation successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred during user validation" });
  }
};
