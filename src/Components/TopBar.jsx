import React, { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import axios from "axios"; // Import Axios for API requests
import "./TopBar.css";

function TopBar() {
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);

  
  
    function formatTime(utcTime) {
      const date = new Date(utcTime);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Add leading zero
      return `${formattedHours}:${formattedMinutes} ${ampm}`;
    }

  useEffect(() => {
    const fetchSunData = async () => {
      try {
        const response = await axios.get(
          "https://api.sunrise-sunset.org/json?lat=31.5497&lng=74.3436&formatted=0" // Lahore coordinates
        );
        const sunriseTime = formatTime(response.data.results.sunrise);
        const sunsetTime = formatTime(response.data.results.sunset);
        setSunrise(sunriseTime);
        setSunset(sunsetTime);
      } catch (error) {
        console.error("Error fetching sunrise/sunset data:", error);
      }
    };

    fetchSunData();
  }, []);
  return (
    <div className="row">
      <div className="icon-container">
        <div className="icon-container">
          <i>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="5"
                stroke="#fbc50b"
                stroke-width="1.5"
              ></circle>
              <path
                d="M12 2V4"
                stroke="#fbc50b"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M12 20V22"
                stroke="#fbc50b"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M4 12L2 12"
                stroke="#fbc50b"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M22 12L20 12"
                stroke="#fbc50b"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M19.7778 4.22266L17.5558 6.25424"
                stroke="#fbc50b"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M4.22217 4.22266L6.44418 6.25424"
                stroke="#fbc50b"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M6.44434 17.5557L4.22211 19.7779"
                stroke="#fbc50b"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M19.7778 19.7773L17.5558 17.5551"
                stroke="#fbc50b"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
            </svg>
          </i>
          <h2 className="h">
            Sunrise At: <b>{sunrise ||  "Loading..."}</b>
          </h2>
        </div>
        <div className="icon-container">
          <i>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.3655 2.12433C20.0384 1.29189 18.8624 1.29189 18.5353 2.12433L18.1073 3.21354L17.0227 3.6429C16.1933 3.97121 16.1933 5.14713 17.0227 5.47544L18.1073 5.90481L18.5353 6.99401C18.8624 7.82645 20.0384 7.82646 20.3655 6.99402L20.7935 5.90481L21.8781 5.47544C22.7075 5.14714 22.7075 3.97121 21.8781 3.6429L20.7935 3.21354L20.3655 2.12433ZM19.4504 2.52989L19.8651 3.58533C19.9648 3.83891 20.165 4.04027 20.4188 4.14073L21.4759 4.55917L20.4188 4.97762C20.165 5.07808 19.9648 5.27943 19.8651 5.53301L19.4504 6.58846L19.0357 5.53301C18.936 5.27943 18.7358 5.07808 18.482 4.97762L17.4249 4.55917L18.482 4.14073C18.7358 4.04027 18.936 3.83891 19.0357 3.58533L19.4504 2.52989ZM16.4981 7.94681C16.171 7.11437 14.9951 7.11437 14.668 7.94681L14.5134 8.34008L14.1222 8.49497C13.2928 8.82328 13.2928 9.9992 14.1222 10.3275L14.5134 10.4824L14.668 10.8757C14.9951 11.7081 16.171 11.7081 16.4981 10.8757L16.6526 10.4824L17.0439 10.3275C17.8733 9.9992 17.8733 8.82328 17.0439 8.49497L16.6526 8.34008L16.4981 7.94681ZM15.583 8.35237L15.7243 8.71188C15.824 8.96545 16.0242 9.16681 16.278 9.26727L16.6417 9.41124L16.278 9.55521C16.0242 9.65567 15.824 9.85703 15.7243 10.1106L15.583 10.4701L15.4418 10.1106C15.3421 9.85703 15.1419 9.65567 14.8881 9.55521L14.5244 9.41124L14.8881 9.26727C15.1419 9.16681 15.3421 8.96545 15.4418 8.71188L15.583 8.35237Z"
                fill="#fbc50b"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0174 2.80157C6.37072 3.29221 2.75 7.22328 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C16.7767 21.25 20.7078 17.6293 21.1984 12.9826C19.8717 14.6669 17.8126 15.75 15.5 15.75C11.4959 15.75 8.25 12.5041 8.25 8.5C8.25 6.18738 9.33315 4.1283 11.0174 2.80157ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.7166 1.25 13.0754 1.82126 13.1368 2.27627C13.196 2.71398 13.0342 3.27065 12.531 3.57467C10.8627 4.5828 9.75 6.41182 9.75 8.5C9.75 11.6756 12.3244 14.25 15.5 14.25C17.5882 14.25 19.4172 13.1373 20.4253 11.469C20.7293 10.9658 21.286 10.804 21.7237 10.8632C22.1787 10.9246 22.75 11.2834 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z"
                fill="#fbc50b"
              ></path>
            </svg>
          </i>
          <h4 className="h">
            Sunset At: <b>{sunset ||  "Loading..."}</b>
          </h4>
        </div>
      </div>
      <div className="social-links">
        <a href="#">
          <FaFacebookF className="icon-fb" />
        </a>
        <div className="vl">|</div>
        <a href="#">
          <FaTwitter className="icon-x" />
        </a>
        <div className="vl">|</div>
        <a href="#">
          <FaLinkedin className="icon-li" />
        </a>
      </div>
      <div>
        <a className="location">
          <svg
            width="24px"
            height="24px"
            viewBox="-4 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-104.000000, -411.000000)" fill="#fbc50b">
                <path d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z"></path>
              </g>
            </g>
          </svg>
          Lahore, Pakistan
        </a>
      </div>
    </div>
  );
}

export default TopBar;
