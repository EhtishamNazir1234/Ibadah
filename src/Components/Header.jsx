import TopBar from "./TopBar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Header.css";
import img2 from "../assets/img2.jpg";
import NavBar from "./NavBar";
import image from "/src/assets/kalma.png";
import { Link } from "react-router-dom";

function Header({onOpenModal}) {
  
  
  return (
    <>
      <header className="header">
        <TopBar />
        <NavBar  onOpenModal={onOpenModal}/>
        <div
          className="background-image zoom"
          style={{ backgroundImage: `url(${img2})` }}
        ></div>
        <img className="image" src={image} alt="" />
        <div className="hero-text">
          <h1>Allah is the Best of Providers</h1>
          <p>
            When things are too hard to handle, retreat &amp; count your
            blessings instead
          </p>      
          <Link to="/Courses" className="btn">
            Discover Courses
          </Link>
        </div>
      </header>
    
    </>
  );
}

export default Header;
