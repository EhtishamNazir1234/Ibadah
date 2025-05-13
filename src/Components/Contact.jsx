import React from "react";
import TopBar from "./TopBar";
import imgayt from "../assets/ayat-with-man.png";
import imgayt1 from "../assets/ayat-with.jpg";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import img2 from "../assets/heading-img.png";
import img4 from "../assets/fun-facts-3.png";
import img5 from "../assets/fun-facts-4.png";
import Footer from "./Footer";
import img6 from "../assets/courses-back.png";
import img7 from "../assets/islamic-scholars-1.jpg";
import "./Courses.css";
import "./Contact.css";
import Body1 from "./Body1";
import img1 from "../assets/fun-facts-1.png";
import img3 from "../assets/fun-facts-2.png";
import img10 from "../assets//color-bg.jpg";
import img11 from "../assets/holy-quran.jpg";
import img12 from "../assets/video-img.jpg";
import img13 from "../assets/service-icon-1.png";
import img14 from "../assets/service-icon-2.png";
import img15 from "../assets/service-icon-3.png";
import img16 from "../assets/service-icon-4.png";
import img17 from "../assets/ayat.png";
import AyatCarousel from "./AyatCarousal";
const Contact = () => {
  return (
    <>
      <section className="parent">
        <TopBar />
        <NavBar />
        <div className="background-image  ">
          <img src={img2} alt="Header" />
          <h2>Contact</h2>
          <li>
            <Link to="/">Home / Contact</Link>
          </li>
        </div>
      </section>
      <Contact1 />

      <div className="gaptop">
        {Array.from({ length: 4 }).map((_, index) => (
          <figure key={index}>
            <img src={img10} alt="gaptop" />
          </figure>
        ))}
      </div>
      <div className="funfact">
        <h1>62</h1>
        <sup>+</sup>
        <h2>Islamic Mosque</h2>
        <img src={img1} alt="fun" />
      </div>
      <div className="funfact2">
        <h1>14</h1>
        <sup>k</sup>
        <h2>Learning Student</h2>
        <img src={img3} alt="fun2" />
      </div>
      <div className="funfact3">
        <h1>317</h1>
        <sup>+</sup>
        <h2>Inspirational Courses</h2>
        <img src={img4} alt="fun2" />
      </div>
      <div className="funfact4">
        <h1>26</h1>
        <sup>+</sup>
        <h2>Islamic Scholars</h2>
        <img src={img5} alt="fun2" />
      </div>
      <AyatCarousel />
      <Footer />
    </>
  );
};

export default Contact;
