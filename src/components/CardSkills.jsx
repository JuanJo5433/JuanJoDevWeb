import React from "react";
import './scss/CardSkills.scss';
import { GrMysql } from "react-icons/gr";
import { SiNextdotjs, SiPostman } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { FaLaravel, FaGitAlt, FaHtml5, FaCss3, FaJsSquare, FaReact, FaSass, FaBootstrap, FaPython, FaPhp, FaNodeJs, FaJira, FaSlack, FaFigma, FaGithub    } from "react-icons/fa";

const CardSkills = ({ title, type, dataAos="fade-up" }) => {
    // Define los íconos para cada tipo
    const frontEndIcons = (
        <ul>
            <li><a href="#"><i><FaHtml5 className="Icon" /></i></a></li>
            <li><a href="#"><i><FaCss3 className="Icon" /></i></a></li>
            <li><a href="#"><i><FaJsSquare className="Icon" /></i></a></li>
            <li><a href="#"><i><FaReact className="Icon"/></i></a></li>
            <li><a href="#"><i><FaSass className="Icon"   /></i></a></li>
            <li><a href="#"><i><FaBootstrap className="Icon"/></i></a></li>
        </ul>
    );

    const backEndIcons = (
        <ul>
            <li><a href="#"><i><FaPython className="Icon"/></i></a></li>
            <li><a href="#"><i><FaPhp className="Icon"/></i></a></li>
            <li><a href="#"><i><FaNodeJs className="Icon" /></i></a></li>
            <li><a href="#"><i><SiNextdotjs className="Icon"/></i></a></li>
            <li><a href="#"><i><GrMysql className="Icon" /></i></a></li>
            <li><a href="#"><i><DiPostgresql className="Icon" /></i></a></li>
            <li><a href="#"><i><FaLaravel  className="Icon"/></i></a></li>
        </ul>
    );

    const toolsIcons = (
        <ul>
            <li><a href="#"><i ><FaJira className="Icon"/></i></a></li>
            <li><a href="#"><i ><FaSlack className="Icon"/></i></a></li>
            <li><a href="#"><i ><FaFigma  className="Icon"/></i></a></li>
            <li><a href="#"><i ><FaGitAlt className="Icon"/></i></a></li>
            <li><a href="#"><i ><FaGithub  className="Icon"/></i></a></li>
            <li><a href="#"><i><SiPostman  className="Icon"/></i></a></li>
        </ul>
    );

    // Renderiza íconos basado en el tipo
    return (
        <div className="cardSkills" data-aos={dataAos}>
            <div className="titleCardSkills">
                <h1>{title}</h1>
            </div>
            <div className="contentCardSkills">
                {type === 'front' ? frontEndIcons : type === "back" ? backEndIcons : toolsIcons}
            </div>
        </div>
    );
};

export default CardSkills;
