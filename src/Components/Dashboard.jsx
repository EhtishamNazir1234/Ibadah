import React, { useState, useEffect } from "react";

import "./Dashboard.css";

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);

  const [editCourse, setEditCourse] = useState({
    title: "",
    price: "",
    weeks: "",
    enrollments: "",
    image: "",
  });
  const [newCourse, setNewCourse] = useState({
    title: "",
    price: "",
    weeks: "",
    enrollments: "",
    image: "",
  });

  const [showAddCourse, setShowAddCourse] = useState(false);
  // Fetch courses from the backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/courses");
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();
        setCourses(data); // Populate courses state
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  // Handle course update
  const handleSave = async () => {
    if (!editCourse || !editCourse._id) {
      console.error("no course id found");
      return;
    }
    const formData = new FormData();
    formData.append("title", editCourse.title);
    formData.append("price", editCourse.price);
    formData.append("weeks", editCourse.weeks);
    formData.append("enrollments", editCourse.enrollments);
    if (editCourse.image) {
      formData.append("image", editCourse.image);
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/courses/${editCourse._id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update course");
      }

      const updatedCourse = await response.json();

      setCourses((prevCourses) =>
        prevCourses.map((course) =>
          course._id === updatedCourse._id ? updatedCourse : course
        )
      );
      setEditCourse(null);
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };
  // Hanlde Add course
  const handleAddCourse = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCourse),
      });

      if (!response.ok) {
        throw new Error("Failed to add course");
      }

      const course = await response.json();
      setCourses([...courses, course]);
      setNewCourse({
        title: "",
        price: "",
        weeks: "",
        enrollments: "",
        image: "",
      });
      setShowAddCourse(false);
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  // Handle course delete
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/courses/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete course");
      }

      setCourses((prevCourses) =>
        prevCourses.filter((course) => course._id !== id)
      );
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };
  // handle new course image
  const handleNewCourseImage = (e) => {
    const { name, files } = e.target;
    setNewCourse({ ...newCourse, [name]: files[0] });
    // for edit course image
  };
  // const handleEditCourseImage = (e) => {
  //   const { name, files } = e.target;
  //   setEditCourse({ ...editCourse, [name]: files[0] });
  // };
  // Handle input change in the edit form
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setEditCourse({ ...editCourse, [name]: value });
  // };
  // Handle input in new course
  const handleNewCourse = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };
  const handleEditCourse = (course) => {
    setEditCourse(course);
  };

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <button onClick={() => setShowAddCourse(!showAddCourse)}>
        {showAddCourse ? "Cancel" : "Add Course"}
      </button>
      {showAddCourse && (
        <div className="add-course-form">
          <h2>Add Course</h2>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={newCourse.title}
              onChange={handleNewCourse}
            />
          </label>
          <label>
            Price ($):
            <input
              type="number"
              name="price"
              value={newCourse.price}
              onChange={handleNewCourse}
            />
          </label>
          <label>
            Weeks:
            <input
              type="number"
              name="weeks"
              value={newCourse.weeks}
              onChange={handleNewCourse}
            />
          </label>
          <label>
            Enrollments:
            <input
              type="number"
              name="enrollments"
              value={newCourse.enrollments}
              onChange={handleNewCourse}
            />
          </label>
          <label>
            Image:{" "}
            <input type="file" name="image" onChange={handleNewCourseImage} />
          </label>
          <button onClick={handleAddCourse}>Add Course</button>
        </div>
      )}

      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price ($)</th>
            <th>Weeks</th>
            <th>Enrollments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course._id}>
              <td>{course.title}</td>
              <td>{course.price}</td>
              <td>{course.weeks}</td>
              <td>{course.enrollments}</td>
              <td>
                <button
                  onClick={() => handleEditCourse(course)}
                  aria-label="Edit"
                >
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                </button>
                <button
                  onClick={() => handleDelete(course._id)}
                  aria-label="Delete"
                >
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editCourse && (
        <div className="edit-course-form">
          <h2>Edit Course</h2>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={editCourse.title}
              onChange={(e) =>
                setEditCourse({ ...editCourse, title: e.target.value })
              }
            />
          </label>
          <label>
            Price ($):
            <input
              type="number"
              name="price"
              value={editCourse.price}
              onChange={(e) =>
                setEditCourse({ ...editCourse, price: e.target.value })
              }
            />
          </label>
          <label>
            Weeks:
            <input
              type="number"
              name="weeks"
              value={editCourse.weeks}
              onChange={(e) =>
                setEditCourse({ ...editCourse, weeks: e.target.value })
              }
            />
          </label>
          <label>
            Enrollments:
            <input
              type="number"
              name="enrollments"
              value={editCourse.enrollments}
              onChange={(e) =>
                setEditCourse({ ...editCourse, enrollments: e.target.value })
              }
            />
          </label>

          <label>
            Current Image:
            <img
              src={previewImage || `http://localhost:5000${editCourse.image}`}
              alt={editCourse.title}
              style={{ width: "150px", height: "100px" }}
            />
          </label>
          <label>
            New Image:
            <input
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) { 
                  setPreviewImage(URL.createObjectURL(file));
                  setEditCourse({ ...editCourse, image: file });
                }
              }}
            />
          </label>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setEditCourse(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
