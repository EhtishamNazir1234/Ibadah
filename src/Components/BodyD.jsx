import React from "react";
import "./Body.css";

import img12 from "../assets/donation-img-1.jpg";
import img13 from "../assets/donation-img-2.jpg";
import img14 from "../assets/donation-img-3.jpg";
import svg from "../assets/dove-svgrepo-com.svg";

const bodyD = () => {
  return (
    <>
      <div class="container2">
        <div class="community-hoverimg">
          <div className="salahimg">
            <figure>
              <img src={img12} alt="img" />
            </figure>
          </div>
          <div class="community-text1">
            <p>Community</p>
            <svg src={svg} />
          </div>
          <div className="salahimg2">
            <figure>
              <img src={img13} alt="img" />
            </figure>
            <div class="community-text2">
              <p>Sample text</p>
            </div>
          </div>
          <div className="salahimg3">
            <figure>
              <img src={img14} alt="img" />
            </figure>
            <div class="community-text3">
              <p>Sample text</p>
            </div>
          </div>
        </div>
      </div>
        
    </>
  );
};

export default bodyD;
