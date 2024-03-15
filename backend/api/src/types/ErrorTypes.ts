export enum ErrorMessage {
  DbError = "Database error",
  InvalidUsername = "The username must contain only alphanumeric characters, underscores, and hyphens. It should have a length between 3 and 16 characters.",
  UsernameExists = "The username already exists.",
  DbConnectionFailed = "Database connection failed",
  InvalidPassword = "The password must contain at least 8 characters, have at least one uppercase letter, one lowercase letter, and one digit and can contain special characters.",
  InvalidEmail = "The email address must have a valid format, including an '@' symbol and a domain.",
  EmailExists = "The email address already exists.",
  PasswordsDoNotMatch = "The passwords do not match.",
  ValidationFailed = "Validation failed.",
}

export type CustomError = {
  title: string;
  statusCode: number;
  errors: Array<{ msg: string }>;
};
