import React from "react";
import Title from "./Title";
import "./scss/Skills.scss";
import CardSkills from "./CardSkills";

const Skills = () => {
    return (
        <div className="containerSkills">
            <Title title={"Habilidades"} />
            <div className="containerCardSkills">
                <CardSkills title={"Front-End"} type={"front"} />
                <CardSkills title={"Back-End"} type={"back"} />
                <CardSkills title={"Herramientas"} type={"tools"} />
            </div>
        </div>
    );
};

export default Skills;
