import express from "express";
import { body } from "express-validator";

import { register, login, validateUser } from "../controllers/auth";
import { emailRegex, passwordRegex, usernameRegex } from "../constants/regexes";
import { checkEmailNotExist, checkPasswordsMatch, checkUsernameNotExist } from "../utils/validators";
import { ErrorMessage } from "../types/ErrorTypes";

const router = express.Router();

// Url: /auth/register
router.post(
  "/register",
  [
    body("username")
      .matches(usernameRegex)
      .withMessage(ErrorMessage.InvalidUsername)
      .bail()
      .custom((value) => checkUsernameNotExist(value)),
    body("email")
      .matches(emailRegex)
      .withMessage(ErrorMessage.InvalidEmail)
      .bail()
      .custom((value) => checkEmailNotExist(value)),
    body("password").matches(passwordRegex).withMessage(ErrorMessage.InvalidPassword),
    body("repeatedPassword")
      .matches(passwordRegex)
      .withMessage(ErrorMessage.InvalidPassword)
      .bail()
      .custom((value, { req }) => checkPasswordsMatch(value, req.body.password)),
  ],
  register
);
// Url: /auth/login
router.post("/login", login);
// Url: /auth/validate
router.post("/validate", validateUser);

export default router;
