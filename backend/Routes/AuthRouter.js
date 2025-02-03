 // For generating JWT tokens
import express from "express";

import { login, register } from "../Controllers/AuthController.js";
const router = express.Router();


router.post('/Register',register);
router.post('/login',login);

export default router;
