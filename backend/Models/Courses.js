import mongoose from "mongoose";

// Define the Course Schema
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  weeks: {
    type: Number,
    required: true,
  },
  enrollments: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true
  },
});

const Course = mongoose.model("Course", courseSchema);

export default Course;
