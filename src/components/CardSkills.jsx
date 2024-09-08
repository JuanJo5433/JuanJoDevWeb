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
            <li><a><i><FaHtml5 className="Icon" /></i></a></li>
            <li><a><i><FaCss3 className="Icon" /></i></a></li>
            <li><a><i><FaJsSquare className="Icon" /></i></a></li>
            <li><a><i><FaReact className="Icon"/></i></a></li>
            <li><a><i><FaSass className="Icon"   /></i></a></li>
            <li><a><i><FaBootstrap className="Icon"/></i></a></li>
        </ul>
    );

    const backEndIcons = (
        <ul>
            <li><a><i><FaPython className="Icon"/></i></a></li>
            <li><a><i><FaPhp className="Icon"/></i></a></li>
            <li><a><i><FaNodeJs className="Icon" /></i></a></li>
            <li><a><i><SiNextdotjs className="Icon"/></i></a></li>
            <li><a><i><GrMysql className="Icon" /></i></a></li>
            <li><a><i><DiPostgresql className="Icon" /></i></a></li>
            <li><a><i><FaLaravel  className="Icon"/></i></a></li>
        </ul>
    );

    const toolsIcons = (
        <ul>
            <li><a><i ><FaJira className="Icon"/></i></a></li>
            <li><a><i ><FaSlack className="Icon"/></i></a></li>
            <li><a><i ><FaFigma  className="Icon"/></i></a></li>
            <li><a><i ><FaGitAlt className="Icon"/></i></a></li>
            <li><a><i ><FaGithub  className="Icon"/></i></a></li>
            <li><a><i><SiPostman  className="Icon"/></i></a></li>
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
