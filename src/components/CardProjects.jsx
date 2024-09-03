import React, { useState } from "react";
import "./scss/CardProjects.scss";

const CardProjects = ({ title, img, descrip, code, demo }) => {
    const [moreText, setMoreText] = useState("line-clamp")
    const [moreTextButton, setMoreTextButton] = useState("Ver mas")
    const handleMoreText = () =>{
        if(moreText === "line-clamp"){
            setMoreText("")
            setMoreTextButton("Ver menos")
        }else{
            setMoreText("line-clamp")
            setMoreTextButton("Ver mas")
        }
    }
    return (
        <div className="cardProject">
            <div className="titleCardProject">
                <h1>{title || "Proyecto"}</h1>
            </div>
            <div className="imgCardProject">
                <img
                    src={
                        img ||
                        "https://generated.vusercontent.net/placeholder.svg"
                    }
                    alt="Img Project"
                />
            </div>
            <div className={`descripCardProject ${moreText}`}>
                <p>
                    {descrip ||
                        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sit non error repudiandae ist"}
                </p>
              
            </div>
            <div className="buttonMoreContent">

            <button onClick={handleMoreText}>[{moreTextButton}]</button>
            </div>

            <div className="buttonsGroupProject">
                <a href={code} target="_blank">
                    <button className="buttonCodeView">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#fff"
                        >
                            <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
                        </svg>
                        <span>Code</span>
                    </button>
                </a>
                <a href={demo} target="_blank">
                    <button className="buttonDemoView">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#006C94"
                        >
                            <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" />
                        </svg>
                        <span>Demo</span>
                    </button>
                </a>
            </div>
        </div>
    );
};

export default CardProjects;
