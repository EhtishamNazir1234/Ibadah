import React from "react";
import svg from "../assets/404-computer.svg";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div className="svg2">
        <img src={svg} />
        <h1>404 Page Not Found</h1>
        <p>Whoops! That page doesn’t exist.</p>
        <span>Here are some helpful links instead:</span>
      </div>
      <div className="linkn">
        <Link to="/">Home</Link>
        <Link to="/contacts">Contact</Link>

      </div>
    </>
  );
};

export default NotFoundPage;
