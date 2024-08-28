import React from "react";
import './scss/CardProjects.scss'

const CardProjects = ({title, img, descrip}) => {
    return (
        <div className="cardProject">
            <div className="titleCardProject">
                <h1>{title || "Proyecto"}</h1>
            </div>
            <div className="imgCardProject">
                <img src={img || "https://generated.vusercontent.net/placeholder.svg"} alt="Img Project" />
            </div>
            <div className="descripCardProject">
               { descrip ||" Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sit non error repudiandae ist"}
            </div>
        </div>
    );
};

export default CardProjects;
