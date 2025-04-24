import React, { useEffect, useState } from "react";
import img1 from "../assets/namaz-time-icon-1.png";
import img2 from "../assets/namaz-time-icon-2.png";
import img3 from "../assets/namaz-time-icon-3.png";
import img4 from "../assets/namaz-time-icon-4.png";
import img5 from "../assets/namaz-time-icon-5.png";
import img6 from "../assets/namaz-time-icon-6.png";
import "./Body.css";
import BodyD from "./BodyD";
// import img7 from "../assets/heading-img.png";
// import img8 from "../assets/text-circle.png";
// import img9 from "../assets/circle-img.png";
// import img10 from "../assets/real-history-book.jpg";
// import img11 from "../assets/real-history-boy.jpg";
// import img12 from "../assets/donation-img-1.jpg";
// import img13 from "../assets/donation-img-2.jpg";
// import img14 from "../assets/donation-img-3.jpg";
// import svg from "../assets/dove-svgrepo-com.svg"
import axios from "axios";
import Body1 from "./Body1";
const Body = () => {
  const [prayerTImes, setPrayerTimes] = useState([]);
  const [iqamahTimes, setIqamahTimes] = useState({});
  const prayerImages = [img1, img2, img3, img4, img5, img6];
  useEffect(() => {
    const fetchPrayeTimes = async () => {
      try {
        const method = 2;
        const response = await axios.get(
          `https://api.aladhan.com/v1/timingsByCity?city=Lahore&country=Pakistan&method=${method}`
        );
        if (response.data && response.data.data) {
          const timings = response.data.data.timings;
          const filteredTimings = Object.entries(timings)
            .filter(
              ([name]) =>
                ![
                  "Imsak",
                  "Firstthird",
                  "Midnight",
                  "Lastthird",
                  "Sunrise",
                  "Sunset",
                ].includes(name)
            )
            .map(([name, time]) => ({
              name,
              time: convertTo12Hour(time),
            }));

          // Add Jumma prayer
          const jummaTiming = {
            name: "Jumma",
            time: convertTo12Hour(timings.Dhuhr),
          };

          // Add 15 minutes to Jumma prayer time
          jummaTiming.time = addMinutesToTime(jummaTiming.time, 15);

          // Set the state with regular prayer times and Jumma prayer time
          setPrayerTimes([...filteredTimings, jummaTiming]);

          const iqamahTimes = {};
          filteredTimings.forEach(({ name, time }) => {
            iqamahTimes[name] = addMinutesToTime(time, 15);
          });

          // Add 15 minutes to Jumma prayer time
          iqamahTimes["Jumma"] = jummaTiming.time;

          setIqamahTimes(iqamahTimes);
        }
      } catch (error) {
        console.log("Error fetching prayer times", error);
      }
    };

    fetchPrayeTimes();
  }, []);
  const convertTo12Hour = (time) => {
    const [hour, minute] = time.split(":").map(Number);
    const ampm = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minute < 10 ? "0" : ""}${minute} ${ampm}`;
  };
  const addMinutesToTime = (time, minutesToAdd) => {
    let [hourMinute, ampm]=time.split(" ");
    let [hour, minute] = hourMinute.split(":").map(Number);
    if(ampm === "PM" && hour !== 12)hour += 12;
    if(ampm === "AM" && hour === 12)hour = 0;
    minute += minutesToAdd;
    hour += Math.floor(minute/60);
    minute%= 60;
    hour %= 24;
    ampm=hour >=12?"PM":"AM";
    const formattedHour=hour%12||12;
    
    return `${formattedHour}:${minute < 10 ? "0" : ""}${minute} ${ampm}`;
  };

  
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
                <span>Iqamah: {iqamahTimes[prayer.name] || "N/A"}</span>
              </div>
            ))}
          </div>
        </div>
        {/* <section class="position-relative">
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
                  <a href="#" class="btn12">
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
          <div class="container2">
                <img className="svg" src={svg} alt="svgicon" />   
            <div class="community-hoverimg">
              <div className="salahimg">
                <figure>
                  <img src={img12} alt="img" />
                </figure>
              </div>
              <div class="community-text1">
                <p>Community</p>
              </div>
              <div className="salahimg2">
                <figure>
                  <img src={img13} alt="img" />
                </figure>
                <div class="community-text2">
                  <p>Education</p>
                </div>
              </div>
              <div className="salahimg3">
                <figure>
                  <img src={img14} alt="img" />
                </figure>
                <div class="community-text3">
                  <p>Donation</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <Body1/>
        <BodyD/>
      </section>
    </>
  );
};

export default Body;
