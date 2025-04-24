import React from "react";
import TopBar from "./TopBar";
import { FaPlay } from "react-icons/fa";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import img2 from "../assets/heading-img.png";
import img4 from "../assets/fun-facts-3.png";
import img5 from "../assets/fun-facts-4.png";
import Footer from "./Footer";
import img6 from "../assets/courses-back.png";
import img7 from "../assets/islamic-scholars-1.jpg";
import "./Courses.css";
import "./About.css";
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
const About = () => {
  return (
    <>
      <section className="parent">
        <TopBar />
        <NavBar />
        <div className="background-image  ">
          <img src={img2} alt="Header" />
          <h2>About</h2>
          <li>
            <Link to="/">Home / About</Link>
          </li>
        </div>
      </section>
      <Body1 />

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
      <section className="bannersec">
        <div className="bannersecdiv">
          <img src={img6} alt="img" />

          <img src={img2} alt="" className="bannersecimg" />
          <p>A Religious Scholar</p>
          <h2>Islamic Scholar</h2>
          <div className="opentime">
            <div className="opentimesub">
              <img src={img7} alt="" />
              <p>molana rehman</p>
              <span>Islamic Speaker</span>
              <a className="call" href="tel:+923471040596">
                <div className="ci-sv1">
                  <svg className="svg1" viewBox="0 0 512 512">
                    <path d="M442.77,80.93l.27-.27-9.39-9a256,256,0,0,0-351.8-3.23h0l-.29.28-9.43,8.77.23.23A257,257,0,0,0,0,256V480a32,32,0,0,0,32,32H94.4a59.2,59.2,0,0,0,59.2-59.2v-112a59.2,59.2,0,0,0-59.2-59.2H25.6V256A231.25,231.25,0,0,1,90.48,95.78l6.95,6.95c15.42,15.41,39.38,17.79,56.95,5.66a179.16,179.16,0,0,1,206,2,44.07,44.07,0,0,0,25.82,8.34,45.65,45.65,0,0,0,32.29-13.53L424.66,99A228.56,228.56,0,0,1,486.4,256v25.6H417.6a59.2,59.2,0,0,0-59.2,59.2v112A59.2,59.2,0,0,0,417.6,512H480a32,32,0,0,0,32-32V256A254,254,0,0,0,442.77,80.93ZM76.8,307.2H94.4A33.64,33.64,0,0,1,128,340.8v112a33.64,33.64,0,0,1-33.6,33.6H76.8Zm-25.6,0V486.4H32a6.41,6.41,0,0,1-6.4-6.4V307.2ZM400.41,87.09c-6.81,6.82-17.59,7.91-25.06,2.51a204.77,204.77,0,0,0-235.51-2.3c-7.42,5.13-17.65,4-24.31-2.68l-6.26-6.26a230.51,230.51,0,0,1,297,2.89ZM435.2,486.4H417.6A33.64,33.64,0,0,1,384,452.8v-112a33.64,33.64,0,0,1,33.6-33.6h17.6Zm51.2-6.4a6.41,6.41,0,0,1-6.4,6.4H460.8V307.2h25.6V480Z"></path>
                  </svg>
                  <div className="contact-info"> +92(347)1040-596</div>
                </div>
              </a>
            </div>
          </div>
          <div className="opentime1">
            <div className="opentimesub">
              <img src={img7} alt="" />
              <p>molana rehman</p>
              <span>Islamic Speaker</span>
              <a className="call" href="tel:+923471040596">
                <div className="ci-sv1">
                  <svg className="svg1" viewBox="0 0 512 512">
                    <path d="M442.77,80.93l.27-.27-9.39-9a256,256,0,0,0-351.8-3.23h0l-.29.28-9.43,8.77.23.23A257,257,0,0,0,0,256V480a32,32,0,0,0,32,32H94.4a59.2,59.2,0,0,0,59.2-59.2v-112a59.2,59.2,0,0,0-59.2-59.2H25.6V256A231.25,231.25,0,0,1,90.48,95.78l6.95,6.95c15.42,15.41,39.38,17.79,56.95,5.66a179.16,179.16,0,0,1,206,2,44.07,44.07,0,0,0,25.82,8.34,45.65,45.65,0,0,0,32.29-13.53L424.66,99A228.56,228.56,0,0,1,486.4,256v25.6H417.6a59.2,59.2,0,0,0-59.2,59.2v112A59.2,59.2,0,0,0,417.6,512H480a32,32,0,0,0,32-32V256A254,254,0,0,0,442.77,80.93ZM76.8,307.2H94.4A33.64,33.64,0,0,1,128,340.8v112a33.64,33.64,0,0,1-33.6,33.6H76.8Zm-25.6,0V486.4H32a6.41,6.41,0,0,1-6.4-6.4V307.2ZM400.41,87.09c-6.81,6.82-17.59,7.91-25.06,2.51a204.77,204.77,0,0,0-235.51-2.3c-7.42,5.13-17.65,4-24.31-2.68l-6.26-6.26a230.51,230.51,0,0,1,297,2.89ZM435.2,486.4H417.6A33.64,33.64,0,0,1,384,452.8v-112a33.64,33.64,0,0,1,33.6-33.6h17.6Zm51.2-6.4a6.41,6.41,0,0,1-6.4,6.4H460.8V307.2h25.6V480Z"></path>
                  </svg>
                  <div className="contact-info"> +92(347)1040-596</div>
                </div>
              </a>
            </div>
            <div className="opentime1">
              <div className="opentimesub">
                <img src={img7} alt="" />
                <p>molana rehman</p>
                <span>Islamic Speaker</span>
                <a className="call" href="tel:+923471040596">
                  <div className="ci-sv1">
                    <svg className="svg1" viewBox="0 0 512 512">
                      <path d="M442.77,80.93l.27-.27-9.39-9a256,256,0,0,0-351.8-3.23h0l-.29.28-9.43,8.77.23.23A257,257,0,0,0,0,256V480a32,32,0,0,0,32,32H94.4a59.2,59.2,0,0,0,59.2-59.2v-112a59.2,59.2,0,0,0-59.2-59.2H25.6V256A231.25,231.25,0,0,1,90.48,95.78l6.95,6.95c15.42,15.41,39.38,17.79,56.95,5.66a179.16,179.16,0,0,1,206,2,44.07,44.07,0,0,0,25.82,8.34,45.65,45.65,0,0,0,32.29-13.53L424.66,99A228.56,228.56,0,0,1,486.4,256v25.6H417.6a59.2,59.2,0,0,0-59.2,59.2v112A59.2,59.2,0,0,0,417.6,512H480a32,32,0,0,0,32-32V256A254,254,0,0,0,442.77,80.93ZM76.8,307.2H94.4A33.64,33.64,0,0,1,128,340.8v112a33.64,33.64,0,0,1-33.6,33.6H76.8Zm-25.6,0V486.4H32a6.41,6.41,0,0,1-6.4-6.4V307.2ZM400.41,87.09c-6.81,6.82-17.59,7.91-25.06,2.51a204.77,204.77,0,0,0-235.51-2.3c-7.42,5.13-17.65,4-24.31-2.68l-6.26-6.26a230.51,230.51,0,0,1,297,2.89ZM435.2,486.4H417.6A33.64,33.64,0,0,1,384,452.8v-112a33.64,33.64,0,0,1,33.6-33.6h17.6Zm51.2-6.4a6.41,6.41,0,0,1-6.4,6.4H460.8V307.2h25.6V480Z"></path>
                    </svg>
                    <div className="contact-info"> +92(347)1040-596</div>
                  </div>
                </a>
              </div>
              <div className="opentime1">
                <div className="opentimesub">
                  <img src={img7} alt="" />
                  <p>molana rehman</p>
                  <span>Islamic Speaker</span>
                  <a className="call" href="tel:+923471040596">
                    <div className="ci-sv1">
                      <svg className="svg1" viewBox="0 0 512 512">
                        <path d="M442.77,80.93l.27-.27-9.39-9a256,256,0,0,0-351.8-3.23h0l-.29.28-9.43,8.77.23.23A257,257,0,0,0,0,256V480a32,32,0,0,0,32,32H94.4a59.2,59.2,0,0,0,59.2-59.2v-112a59.2,59.2,0,0,0-59.2-59.2H25.6V256A231.25,231.25,0,0,1,90.48,95.78l6.95,6.95c15.42,15.41,39.38,17.79,56.95,5.66a179.16,179.16,0,0,1,206,2,44.07,44.07,0,0,0,25.82,8.34,45.65,45.65,0,0,0,32.29-13.53L424.66,99A228.56,228.56,0,0,1,486.4,256v25.6H417.6a59.2,59.2,0,0,0-59.2,59.2v112A59.2,59.2,0,0,0,417.6,512H480a32,32,0,0,0,32-32V256A254,254,0,0,0,442.77,80.93ZM76.8,307.2H94.4A33.64,33.64,0,0,1,128,340.8v112a33.64,33.64,0,0,1-33.6,33.6H76.8Zm-25.6,0V486.4H32a6.41,6.41,0,0,1-6.4-6.4V307.2ZM400.41,87.09c-6.81,6.82-17.59,7.91-25.06,2.51a204.77,204.77,0,0,0-235.51-2.3c-7.42,5.13-17.65,4-24.31-2.68l-6.26-6.26a230.51,230.51,0,0,1,297,2.89ZM435.2,486.4H417.6A33.64,33.64,0,0,1,384,452.8v-112a33.64,33.64,0,0,1,33.6-33.6h17.6Zm51.2-6.4a6.41,6.41,0,0,1-6.4,6.4H460.8V307.2h25.6V480Z"></path>
                      </svg>
                      <div className="contact-info"> +92(347)1040-596</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bannersecmosque">
        <img src={img11} alt="" />
        <div className="textflue">
          <h1>Listen Holy Quran</h1>
          <h2> Recite & Listen the Holy Quran Online</h2>
          <h3>
            Duis aute irure dolor in reprehenit in voluptate velit esse cillum
            dolo re eu fugiat nulla pariatur.
          </h3>
          <div className="quran-audio-playerouter">
            <span>Surah Falaq</span>
            <div className="quran-audio-player">
              <audio controls>
                <source
                  src="https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/113.mp3"
                  type="audio/mpeg"
                />
              </audio>
            </div>
          </div>
        </div>

        <div className="bannersecmosquegreen">
          <h2>Support us, we need your help.</h2>
          <div class="progress-circle">
            <svg class="circle-svg">
              <circle cx="70" cy="70" r="60"></circle>
              <circle cx="70" cy="70" r="60" class="progress"></circle>
            </svg>
            <div class="percentage" id="percentage">
              85%
            </div>
          </div>

          <span>Donation Collected</span>
          <h1>$71,000</h1>
          <Link to="/Courses" className="mosquebtn1">
            Donate now
          </Link>
        </div>
      </div>
      <div className="secondlast">
        <div className="secondlastimg">
          <img src={img2} alt="" />
          <h2>Serving Humanity</h2>
          <h1>Our Services</h1>
        </div>
        <div className="scndmainlft">
          <img src={img13} alt="" />
          <h1>Hajj & Umrah</h1>
          <p>
            Lorem ipsum dolor sit amet, cons mod tempor incididunt ut labo e
            minim veniam.
          </p>
        </div>
        <div className="scndmainlft1">
          <img src={img14} alt="" />
          <h1>Islamic Marriage</h1>
          <p>
            Lorem ipsum dolor sit amet, cons mod tempor incididunt ut labo e
            minim veniam.
          </p>
        </div>
        <div className="scndmain">
          <img src={img12} alt="" />
          <button className="video-button">
            <div className="faplay">▶</div>
          </button>
        </div>

        <div className="scndmainrt">
          <img src={img15} alt="" />
          <h1>Islam Education</h1>
          <p>
            Lorem ipsum dolor sit amet, cons mod tempor incididunt ut labo e
            minim veniam.
          </p>
        </div>
        <div className="scndmainrt1">
          <img src={img16} alt="" />
          <h1>Islamic Marriage</h1>
          <p>
            Lorem ipsum dolor sit amet, cons mod tempor incididunt ut labo e
            minim veniam.
          </p>
        </div>
        <div className="lastsec">
          <div className="lastsec1">
            <p>Quranic Verses With Translation</p>
            <h1>Islamic ayat with translation</h1>
            <div className="ayat">
              <img src={img17} />
              <h2>
                O you who have believed, Seek help through patience and prayers.
              </h2>
              <h5>Al-Baqrah (9) : 153</h5>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
