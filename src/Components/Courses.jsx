  import React, { useEffect, useState } from "react";
  import TopBar from "./TopBar";
  import NavBar from "./NavBar";
  import Footer from "./Footer";
  import img2 from "../assets/heading-img.png";
  import img4 from "../assets/color-bg.jpg";
  import { Link } from "react-router-dom";
  import Modal from "./Modal";
  import Login from "./Login";
  import "./Courses.css";
  import img3 from "../assets/scholar.jpg";
import img5 from "../assets/join-our-1.jpg"
  const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const handleOpenModal = () => {
      setModalOpen(true);
    };
    const handleCloseModal = () => {
      setModalOpen(false);
    };

    useEffect(() => {
      // Fetch course data from the backend API
      const fetchCourses = async () => {
        try {
          const response = await fetch("http://localhost:5000/api/courses");
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();

          setCourses(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchCourses();
    }, []);

    return (
      <>
        <section className="parent">
          <TopBar />
          <NavBar onOpenModal={handleOpenModal} />
          <div className="background-image">
            <img src={img2} alt="Header" />

            <h2>Our Courses</h2>
            <li>
              <Link to="/">Home / Our Courses</Link>
            </li>
          </div>
        </section>
        <section className="sect2">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <div className="c-cimg">
                <i className="fa-solid fa-arrow-right overlay-icon"></i>

                <img
                  src={`http://localhost:5000${course.image}`}
                  alt={course.title}
                />
              </div>
              <div className="green-tutor">
                <h4>Habib Al Noor</h4>
                <span>Arabic Scholar</span>
                <img src={img3} alt="scholar" />
              </div>
              <div className="c-c-content">
                <Link to="#">{course.title}</Link>
                <h4>${course.price}</h4>
                <span>{course.free ? "Course Free" : "Paid Course"}</span>
              </div>
              <div className="courses-weeks">
                <h6>{course.weeks} weeks</h6>
                <div className="border"></div>
                <h6>{course.enrollments} enroll</h6>
              </div>
            </div>
          ))}
        </section>
        <div className="color-bg1">
          <h4> Serving the community, working in partnership</h4>
          <span>
            We believe that our primary role is to serve the needs of the local
            community
          </span>
          <Link to="/Courses" className="btn12">
            Discover Courses
          </Link>
          <img src={img4} alt="" />
          
        </div>
        <Footer />
        {isModalOpen && (
          <Modal onClose={handleCloseModal}>
            <Login />
          </Modal>
          
        )}
      </>
    );
  };

  export default Courses;
