import express from "express";
import { getAzaans } from "../Controllers/AzaanController.js";
const router = express.Router();

router.get('/',getAzaans);

export default router;