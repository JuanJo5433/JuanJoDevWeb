import React, { useState } from "react";
import "./scss/Studie.scss";
const Studie = ({ company, time, rol, descrip }) => {
  const [viewInfo, setViewInfo] = useState(true);
  const handleClick = () => {
    setViewInfo(!viewInfo);
  };
  return (
    <div className="contentStudie">
      <div className="titleStudie">
        <h1>
          {company} | {time}
        </h1>
        <button onClick={handleClick}>
          <svg
            className={
              viewInfo ? "buttonOpenStudie" : "buttonCloseStudie"
            }
            xmlns="http://www.w3.org/2000/svg"
            height="34px"
            viewBox="0 -960 960 960"
            width="34px"
            fill="#FFFFFF"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </button>
      </div>
      <div
        className={
          viewInfo ? "contentStudieVisible" : "contentStudieHidden"
        }
      >
        <div className="rolStudie">
          <h2>{rol}</h2>
        </div>
        <div className="descripStudie">
          <p>{descrip}</p>
        </div>
      </div>
    </div>
  );
};

export default Studie;
