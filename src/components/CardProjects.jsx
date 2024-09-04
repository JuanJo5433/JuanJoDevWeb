import React, { useEffect, useRef, useState } from "react";
import "./scss/CardProjects.scss";

const CardProjects = ({ title, img, descrip, code, demo }) => {
    const [moreText, setMoreText] = useState("line-clamp");
    const [moreTextButton, setMoreTextButton] = useState("Ver mas");
    const [numberOfLines, setNumberOfLines] = useState(0);
    const handleMoreText = () => {
        if (moreText === "line-clamp") {
            setMoreText("");
            setMoreTextButton("Ver menos");
        } else {
            setMoreText("line-clamp");
            setMoreTextButton("Ver mas");
        }
    };

    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            const elementHeight = textRef.current.scrollHeight;

            // Obtén el valor de lineHeight en píxeles
            const computedStyle = getComputedStyle(textRef.current);
            let lineHeight = computedStyle.lineHeight;

            // Convierte lineHeight a un número si es necesario
            if (lineHeight === "normal") {
                // Usa un valor predeterminado, por ejemplo, 1.2em (ajústalo según tus necesidades)
                lineHeight =
                    parseFloat(getComputedStyle(textRef.current).fontSize) *
                    1.5;
            } else {
                // Si lineHeight es en píxeles (px), conviértelo a número
                lineHeight = parseFloat(lineHeight);
            }

            const lines = Math.ceil(elementHeight / lineHeight);
            setNumberOfLines(lines);
            console.log(elementHeight);
            console.log(lineHeight);
            console.log(lines);
        }
    }, []);

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
                <p ref={textRef}>
                    {descrip ||
                        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sit non error repudiandae ist"}
                </p>
            </div>
            {numberOfLines > 4 ? (
                <div className="buttonMoreContent">
                    <button onClick={handleMoreText}>[{moreTextButton}]</button>
                </div>
            ) : (
                ""
            )}

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
