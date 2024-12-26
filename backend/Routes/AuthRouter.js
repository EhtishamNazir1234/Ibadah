const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");

// POST request to create Azaan
router.post("/azaan", AuthController.createAzaan);

// GET request to fetch Azaans
router.get("/azaans", AuthController.getAzaans);

module.exports = router;
