import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import AuthRouter from "./Routes/AuthRouter.js";
import AzaanRouter from "./Routes/AzaanRouter.js";
import CourseRouter from "./Routes/CourseRouter.js"; // Import CourseRouter
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
const _filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_filename);

// Middleware
app.use(bodyParser.json()); 
app.use(
  cors({
    origin: "https://ibadah-mu.vercel.app", 
    methods: ["GET", "POST"], 
  })
); // To allow cross-origin requests
app.use(express.json()); // Built-in middleware for parsing JSON
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); //serves image from the upload driectory

// MongoDB Connection
mongoose
  .connect(`${process.env.mongo_dbconnection}/Ibadaah`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// API Routes
app.use("/api/azaans", AzaanRouter); // Azaan management routes
app.use("/api/auth", AuthRouter); // Authentication routes
app.use("/api/courses", CourseRouter); // Course management routes

// Start the Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
