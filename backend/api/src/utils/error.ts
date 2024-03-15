import { CustomError } from "../types/ErrorTypes";

/**
 * Creates a custom error object.
 *
 * @param {any} title - The title of the error.
 * @param {any} statusCode - The status code of the error.
 * @param {Array<any>} errors - An array of error objects.
 * @returns {CustomError} - The custom error object.
 */
export const createError = (title: any, statusCode: any, errors: Array<any>): CustomError => {
  const error: any = new Error(title);
  error.statusCode = statusCode;
  error.errors = errors;
  return error;
};
