import React from "react";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import img2 from "../assets/heading-img.png";
import Footer from "./Footer";
const About = () => {
  return (
    <>
      <section>
        <TopBar />
        <NavBar />
        <div className="background-image">
          <img src={img2} alt="Header" />
          <h2>About</h2>
          <li>
            <Link to="/">Home / About</Link>
          </li>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
