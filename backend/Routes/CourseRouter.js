import express from "express";
import Course from "../Models/Courses.js";
import multer from "multer";
import path from "path";

const router = express.Router();

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads"); // Folder for storing images
  },  
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/; // Allowed file types
    const extname = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = fileTypes.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed (jpeg, jpg, png)!"));
    }
  },
});

// POST: Add a new course
router.post("/", upload.single("image"), async (req, res) => {
  const { title, price, weeks, enrollments } = req.body;
  const imagePath = req.file ? "/uploads/" + req.file.filename : ""; // Image path

  const newCourse = new Course({
    title,
    price,
    weeks,
    enrollments,
    image: imagePath, // Store the image path in the course document
  });

  try {
    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse); // Respond with saved course data
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET: Retrieve all courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT: Update a course (including the image)
router.put("/:id", upload.single("image"), async (req, res) => {
  const { id } = req.params;
  const { title, price, weeks, enrollments } = req.body;
  const imagePath = req.file ? "/uploads/" + req.file.filename : null;

  try {
    const updatedData = {
      title,
      price,
      weeks,
      enrollments,
    };

    if (imagePath) {
      updatedData.image = imagePath; // Update image if provided
    }

    const updatedCourse = await Course.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json(updatedCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE: Remove a course by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCourse = await Course.findByIdAndDelete(id);
    if (!deletedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json({ message: "Course deleted successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
