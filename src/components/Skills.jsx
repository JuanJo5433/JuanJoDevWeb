import React from "react";
import Title from "./Title";
import "./scss/Skills.scss";
import CardSkills from "./CardSkills";

const Skills = () => {
    return (
        <div className="containerSkills">
            <Title title={"Habilidades"} />
            <div className="containerCardSkills">
                <CardSkills title={"Front-End"} type={"front"} dataAos={"zoom-out-right"} />
                <CardSkills title={"Back-End"} type={"back"} dataAos={"zoom-out-down"}/>
                <CardSkills title={"Herramientas"} type={"tools"} dataAos={"zoom-out-left"} />
            </div>
        </div>
    );
};

export default Skills;
