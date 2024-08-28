import React, { useEffect, useRef, useState } from "react";
import "./scss/Profile.scss";
import userPhoto from "../assets/userPhoto.jpg";
import Title from "./Title";
import { FaLinkedinIn } from "react-icons/fa";
import { LuGithub, LuClipboardCopy } from "react-icons/lu";
import { TbFileCv } from "react-icons/tb";
import cv from "../assets/Juan_Jose_Giraldo.pdf";

const Profile = () => {
    const [copyActive, setCopyActive] = useState(false);
    const textRef = useRef(null);
    const consoleRef = useRef(null);

    useEffect(() => {
        function consoleText(words, ref, colors) {
            if (colors === undefined) colors = ["#fff"];
            let visible = true;
            const con = consoleRef.current;
            let letterCount = 1;
            let x = 1;
            let waiting = false;
            const target = ref.current;
            target.setAttribute("style", "color:" + colors[0]);

            window.setInterval(function () {
                if (letterCount === 0 && waiting === false) {
                    waiting = true;
                    target.innerHTML = words[0].substring(0, letterCount);
                    window.setTimeout(function () {
                        const usedColor = colors.shift();
                        colors.push(usedColor);
                        const usedWord = words.shift();
                        words.push(usedWord);
                        x = 1;
                        target.setAttribute("style", "color:" + colors[0]);
                        letterCount += x;
                        waiting = false;
                    }, 1000);
                } else if (
                    letterCount === words[0].length + 1 &&
                    waiting === false
                ) {
                    waiting = true;
                    window.setTimeout(function () {
                        x = -1;
                        letterCount += x;
                        waiting = false;
                    }, 1000);
                } else if (waiting === false) {
                    target.innerHTML = words[0].substring(0, letterCount);
                    letterCount += x;
                }
            }, 120);

            window.setInterval(function () {
                if (visible === true) {
                    con.className = "console-underscore hidden";
                    visible = false;
                } else {
                    con.className = "console-underscore";
                    visible = true;
                }
            }, 400);
        }

        consoleText(["Desarrollador", "Full", "Stack"], textRef, [
            "#7fffd4",
            "white",
            "#7fffd4",
        ]);
    }, []);

    const handleCopyClick = () => {
        navigator.clipboard.writeText("juanjosegiraldo1001@gmail.com");
        setCopyActive(true);
        setTimeout(() => {
            setCopyActive(false);
        }, 2000);
    };

    return (
        <div className="containerProfile">
            <section className="infoProfile">
                <div className="name" data-aos="fade-right">
                    <Title title={"JuanJoDev"} />
                </div>
                <div className="imgUserResposive">
                    <img
                        src={userPhoto}
                        alt="Photo JuanJoDev"
                        data-aos="fade-left"
                    />
                </div>
                <div className="rol" data-aos="fade-left">
                    <span id="text" ref={textRef}></span>
                    <div
                        className="console-underscore"
                        id="console"
                        ref={consoleRef}
                    >
                        &#95;
                    </div>
                </div>
                <div className="info" data-aos="fade-right">
                    <p>
                        {" "}
                        Soy una persona apasionada, destacada por mi dedicación
                        y capacidad de adaptación en el trabajo en equipo. Me
                        esfuerzo constantemente por mejorar y dar lo mejor de mí
                        en cada reto que enfrento, buscando siempre soluciones
                        eficaces y eficientes.
                    </p>
                </div>
                <div className="socialProfile">
                    <div className="socialButtonsProfile">
                        <a
                            href={
                                "https://www.linkedin.com/in/juan-jose-giraldo-6a199520a"
                            }
                            target="_blank"
                        >
                            <button
                                className="buttonProfile"
                                data-aos="fade-up-right"
                            >
                                <FaLinkedinIn />
                            </button>
                        </a>
                        <a
                            href={"https://github.com/JuanJo5433"}
                            target="_blank"
                        >
                            <button
                                className="buttonProfile"
                                data-aos="fade-up"
                            >
                                <LuGithub />
                            </button>
                        </a>
                        <button
                            className="buttonProfile"
                            data-aos="fade-up-left"
                        >
                            <a href={cv} download={"CV JUAN JOSE GC.pdf"}>
                                <TbFileCv />
                            </a>
                        </button>
                    </div>

                    <div className="inputGroupProfile" data-aos="fade-up">
                        <input
                            type="email"
                            className="inputProfile"
                            id="Email"
                            name="Email"
                            value="juanjosegiraldo1001@gmail.com"
                            autoComplete="off"
                            disabled
                        />
                        <button
                            className={`buttonCopyProfile ${
                                copyActive ? "active" : ""
                            }`}
                            onClick={handleCopyClick}
                        >
                            <LuClipboardCopy />
                        </button>
                    </div>
                </div>
            </section>
            <section className="imgUser" data-aos="fade-up">
                <img src={userPhoto} alt="Photo JuanJoDev" />
            </section>
        </div>
    );
};

export default Profile;
