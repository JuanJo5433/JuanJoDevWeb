import React from "react";
import "./scss/Experience.scss";
const Experience = ({ company, time, rol, descrip }) => {
    return (
        <div>
            <div className="titleExperience">
                <h1>
                    {company} | {time}
                </h1>
            </div>
            <div className="rolExperience">
                <h2>{rol}</h2>
            </div>
            <div className="descripExperience">
                <p>{descrip}</p>
            </div>
        </div>
    );
};

export default Experience;
