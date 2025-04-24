import React, { useState } from "react";
import "./NavBar.css";
import img from "../assets/image.png";
import { Link } from "react-router-dom";

const NavBar = ({ onOpenModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="nav-bar">
        <Link to="/index.html">
          <img className="img" src={img} alt="Logo" />
        </Link>
        <div className={`nav-links-container ${isMenuOpen ? "show" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link to="/" onClick={toggleMenu}>
                <b>Home</b>
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                <b>About</b>
              </Link>
            </li>
            <li>
              <Link to="/courses" onClick={toggleMenu}>
                <b>Courses</b>
              </Link>
            </li>
            <li>
              <Link to="/campaigns" onClick={toggleMenu}>
                <b>Campaigns</b>
              </Link>
            </li>
            <li>
              <Link to="/Pages" onClick={toggleMenu}>
                <b>Pages</b>
              </Link>
            </li>
            <li>
              <Link to="/News" onClick={toggleMenu}>
                <b>News</b>
              </Link>
            </li>
            <li>
              <Link to="/contacts" onClick={toggleMenu}>
                <b>Contacts</b>
              </Link>
            </li>
            <li>
              <Link onClick={onOpenModal}>Log In</Link>
            </li>
          </ul>
        </div>
        <Link className="hamburger-icon" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </Link>

        <Link>
          <div className="ci-sv">
            <svg
              className="svg1"
             
              viewBox="0 0 512 512"
            >
              <path d="M442.77,80.93l.27-.27-9.39-9a256,256,0,0,0-351.8-3.23h0l-.29.28-9.43,8.77.23.23A257,257,0,0,0,0,256V480a32,32,0,0,0,32,32H94.4a59.2,59.2,0,0,0,59.2-59.2v-112a59.2,59.2,0,0,0-59.2-59.2H25.6V256A231.25,231.25,0,0,1,90.48,95.78l6.95,6.95c15.42,15.41,39.38,17.79,56.95,5.66a179.16,179.16,0,0,1,206,2,44.07,44.07,0,0,0,25.82,8.34,45.65,45.65,0,0,0,32.29-13.53L424.66,99A228.56,228.56,0,0,1,486.4,256v25.6H417.6a59.2,59.2,0,0,0-59.2,59.2v112A59.2,59.2,0,0,0,417.6,512H480a32,32,0,0,0,32-32V256A254,254,0,0,0,442.77,80.93ZM76.8,307.2H94.4A33.64,33.64,0,0,1,128,340.8v112a33.64,33.64,0,0,1-33.6,33.6H76.8Zm-25.6,0V486.4H32a6.41,6.41,0,0,1-6.4-6.4V307.2ZM400.41,87.09c-6.81,6.82-17.59,7.91-25.06,2.51a204.77,204.77,0,0,0-235.51-2.3c-7.42,5.13-17.65,4-24.31-2.68l-6.26-6.26a230.51,230.51,0,0,1,297,2.89ZM435.2,486.4H417.6A33.64,33.64,0,0,1,384,452.8v-112a33.64,33.64,0,0,1,33.6-33.6h17.6Zm51.2-6.4a6.41,6.41,0,0,1-6.4,6.4H460.8V307.2h25.6V480Z"></path>
            </svg>
            <div className="contact-info"> +(00)123-345-11</div>
          </div>
        </Link>
        <div className="ver-li"></div>
        <a href="javascript:void(0)" className="search-btn">
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="_12" data-name="12">
              <path d="m21.71 20.29-2.83-2.82a9.52 9.52 0 1 0 -1.41 1.41l2.82 2.83a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zm-17.71-8.79a7.5 7.5 0 1 1 7.5 7.5 7.5 7.5 0 0 1 -7.5-7.5z"></path>
            </g>
          </svg>
        </a>
      </nav>
    </>
  );
};

export default NavBar;
