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
        <div className="heading">
          <img src={img7} />
          <p> Welcome to the Islamic Center</p>
          <h2>Know The Real History of Islam</h2>
        </div>
        <div className="circle-img">
          <img className='rotate' src={img8} alt="" />
         
        </div>  
      </section>
    </>
  );
};

export default Body;
