import { TNewUser } from "../types/UserModelTypes";

import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { createError } from "../utils/error";
import { NextFunction } from "express";
import { ErrorMessage } from "../types/ErrorTypes";

/**
 * Handles the registration of a new user.
 *
 * @param _req - The request object.
 * @param res - The response object.
 * @param next - The next function.
 */
export const register = (_req: Request, res: Response, next: NextFunction) => {
  try {
    const errors = validationResult(_req).array();

    if (errors.length > 0) {
      throw createError(ErrorMessage.ValidationFailed, 422, errors);
    }

    const userData: TNewUser = _req.body;

    res.status(200).json(userData);
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
