import React from "react";
import "./scss/Studie.scss";
const Studie = ({ company, time, rol, descrip }) => {
    return (
        <div>
            <div className="titleStudie">
                <h1>
                    {company} | {time}
                </h1>
            </div>
            <div className="rolStudie">
                <h2>{rol}</h2>
            </div>
            <div className="descripStudie">
                <p>{descrip}</p>
            </div>
        </div>
    );
};

export default Studie;
