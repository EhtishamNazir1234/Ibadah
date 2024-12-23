import React from "react";
import img1 from "../assets/namaz-time-icon-1.png";
import img2 from "../assets/namaz-time-icon-2.png"
import img3 from "../assets/namaz-time-icon-3.png"
import img4 from "../assets/namaz-time-icon-4.png"
import img5 from "../assets/namaz-time-icon-5.png"
import img6 from "../assets/namaz-time-icon-6.png"
import "./Body.css";
import img7 from "../assets/heading-img.png"
import img8 from "../assets/text-circle.png"
import img9 from "../assets/circle-img.png"

const Body = () => {
  return (
    <>
      <section className="nmz">
        <div className="container">
          <div className="namaz-timing">
            <div className="namaz-time">
              <img src={img1} alt="icon" />
              <h4>Fajr</h4>
              <h5>3:24 AM</h5>
              <span>Iqamah:4:15 AM</span>
            </div>

            <div className="namaz-time">
              <img src={img2} alt="icon" />
              <h4>Zuhr</h4>
              <h5>1:09 PM</h5>
              <span>Iqamah:1:30 PM</span>
            </div>

            <div className="namaz-time">
              <img src={img3} alt="icon" />
              <h4>Asr</h4>
              <h5>6:29 PM</h5>
              <span>Iqamah:7:30 PM</span>
            </div>

            <div className="namaz-time">
              <img src={img4} alt="icon" />
              <h4>Maghrib</h4>
              <h5> 9:01 PM</h5>
              <span>Iqamah:9:01 PM</span>
            </div>

            <div className="namaz-time">
              <img src={img5} alt="icon" />
              <h4>Isha</h4>
              <h5>10:10 PM</h5>
              <span>Iqamah:10:45 PM</span>
            </div>

            <div className="namaz-time">
              <img src={img6} alt="icon" />
              <h4>Jummah</h4>
              <h5>1:10 PM</h5>
              <span>Iqamah:2:45 PM</span>
            </div>
          </div>
        </div>
      </section>
      <section className="sec2">
        <div className="container">
          <div className="heading">
            <img src={img7} />
            <p> Welcome to the Islamic Center</p>
            <h2>Know The Real History of Islam</h2>
          </div>

          <div className="isl-hist">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscsed do eiusmod
              tempor incididunt ut labore etedum dolor sit a ad minim veniam,
              quis nostr incididunt ut laborcitationn tempor incididunt ut
              labore um dolor sit amet, consectetur adipiscsed do eiu agna a
              liqua. Ut enim ad minim veniam, quis nostr incididunt ut
              laborcitation.
            </p>
          </div>
          <div className="circle">
            <img src={img8} alt="" />
            <figure className="circle-img">

            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
