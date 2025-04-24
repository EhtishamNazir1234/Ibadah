import React, { useEffect, useState } from "react";
import "./ScrollValueIndicator.css";
import { FaArrowUp } from "react-icons/fa";
const ScrollValueIndicator = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollpercent = (scrollTop / docHeight) * 100;
    setScroll(scrollpercent);
  };
  const ScrollValueIndicator =()=>{
    window.scrollTo({top:0,behavior:"smooth"});
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="scroll-to-top" onClick={ScrollValueIndicator}>
        <div
          className="circle"
          style={{
            background: `conic-gradient(#007d3a ${scroll}%, #fff ${scroll}% 100%)`,
          }}
        >
          <FaArrowUp className="arrow-icon" />
        </div>
      </div>
    </>
  );
};

export default ScrollValueIndicator;
