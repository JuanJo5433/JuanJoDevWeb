import React from "react";
import Title from "./Title";
import CardProjects from "./CardProjects";
import "./scss/Projects.scss";

const Projects = () => {
    return (
        <div className="containerProjects">
            <Title title={"Proyectos"} />
            <section className="containerCardProjects">
                <CardProjects />
                <CardProjects />
                <CardProjects />
            </section>
        </div>
    );
};

export default Projects;
