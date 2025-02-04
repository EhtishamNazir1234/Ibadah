import React, { useEffect, useState } from "react";
import img1 from "../assets/namaz-time-icon-1.png";
import img2 from "../assets/namaz-time-icon-2.png";
import img3 from "../assets/namaz-time-icon-3.png";
import img4 from "../assets/namaz-time-icon-4.png";
import img5 from "../assets/namaz-time-icon-5.png";
import img6 from "../assets/namaz-time-icon-6.png";
import "./Body.css";
import img7 from "../assets/heading-img.png";
import img8 from "../assets/text-circle.png";
import img9 from "../assets/circle-img.png";
import img10 from "../assets/real-history-book.jpg";
import img11 from "../assets/real-history-boy.jpg";

const Body = () => {
  const [prayerTImes, setPrayerTimes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/azaans")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setPrayerTimes(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const prayerImages = [img1, img2, img3, img4, img5, img6];
  return (
    <>
      <section className="nmz">
        <div className="container">
          <div className="namaz-timing">
            {prayerTImes.map((prayer, index) => (
              <div className="namaz-time" key={index}>
                <img
                  src={prayerImages[index % prayerImages.length]}
                  alt="icon"
                />
                <h4>{prayer.name}</h4>
                <h5>{prayer.time}</h5>
                <span>{prayer.iqamah}</span>
              </div>
            ))}
          </div>
        </div>
        <section class="position-relative">
          <div class="container1">
            <div class="heading">
              <img src={img7} alt="icon" />
              <p>Welcome to the Islamic Center</p>
              <h2>Know The Real History of Islam</h2>
            </div>
            <div class="row">
              <div class="col-lg-5">
                <div class="islamic-history">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscsed do
                    eiusmod tempor incididunt ut labore etedum dolor sit a ad
                    minim veniam, quis nostr incididunt ut laborcitationn tempor
                    incididunt ut labore um dolor sit amet, consectetur
                    adipiscsed do eiu agna a liqua. Ut enim ad minim veniam,
                    quis nostr incididunt ut laborcitation.
                  </p>
                  <ul class="list">
                    <li>Astonishing Facilities</li>
                    <li>Helping CommunitiesLeads </li>
                    <li>Charity EventsSchooling Children</li>
                    <li>Feeding Hungry People</li>
                  </ul>
                  <a href="#" class="btn">
                    Read Our History
                  </a>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="row align-items-end">
                  <div class="col-lg-5 col-6">
                    <div class="circle-text">
                      <img
                        src={img8}
                        class="circle-text-img"
                        alt="circle-img"
                      />
                      <figure class="circle-img">
                        <img src={img9} alt="circle-img" />
                      </figure>
                    </div>
                    <div class="real-history-book hoverimg">
                      <figure>
                        <img src={img10} alt="img" />
                      </figure>
                    </div>
                  </div>
                  <div class="col-lg-7 col-6">
                    <div class="real-history-book two hoverimg">
                      <figure>
                        <img src={img11} alt="real-history-boy" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Body;
