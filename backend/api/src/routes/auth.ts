import express from "express";

import { register, login, validateUser } from "../controllers/auth";

const router = express.Router();

// Url: /auth/register
router.post("/register", register);
// Url: /auth/login
router.post("/login", login);
// Url: /auth/validate
router.post("/validate", validateUser);

export default router;
