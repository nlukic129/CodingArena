import User from "../models/User";
import { ErrorMessage } from "../types/ErrorTypes";
import { createError } from "./error";

/**
 * Checks if a username already exists in the database.
 * @param value - The username to check.
 * @returns A Promise that resolves to `true` if the username does not exist, or throws an error if there is a database error or the username already exists.
 */
export const checkUsernameNotExist = async (value: string) => {
  try {
    const existingUser = await User.findOne({ username: value });
    if (existingUser) {
      Promise.reject(ErrorMessage.UsernameExists);
    }

    return true;
  } catch (err: any) {
    throw createError(err.message, 500, [{ msg: ErrorMessage.DbError }]);
  }
};

/**
 * Checks if an email does not exist in the database.
 * @param value - The email to check.
 * @returns A Promise that resolves to `true` if the email does not exist, or throws an error if there is a database error or if the email already exists.
 */
export const checkEmailNotExist = async (value: string) => {
  try {
    const existingUser = await User.findOne({ email: value });
    if (existingUser) {
      Promise.reject(ErrorMessage.EmailExists);
    }

    return true;
  } catch (err: any) {
    throw createError(err.message, 500, [{ msg: ErrorMessage.DbError }]);
  }
};

/**
 * Checks if the given value matches the password.
 * @param value - The value to be checked.
 * @param password - The password to compare against.
 * @returns `true` if the value matches the password, otherwise throws an error.
 */
export const checkPasswordsMatch = (value: string, password: string) => {
  if (value !== password) {
    throw createError(ErrorMessage.ValidationFailed, 400, [{ msg: ErrorMessage.PasswordsDoNotMatch }]);
  }

  return true;
};
