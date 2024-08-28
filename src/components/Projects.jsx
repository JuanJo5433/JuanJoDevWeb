import React from "react";
import Title from "./Title";
import CardProjects from "./CardProjects";
import "./scss/Projects.scss";
import photoSearch from "./../assets/project1.png";
import galleryApp from "./../assets/project.png";

const Projects = () => {
    return (
        <div className="containerProjects">
            <Title title={"Proyectos"} />
            <section className="containerCardProjects">
                <div data-aos="fade-right">
                    <a
                        href="https://photosearchjj.netlify.app/"
                        target="_blank"
                        className="projectUrl"
                    >
                        <CardProjects
                            title={"PhotoSearch"}
                            img={photoSearch}
                            descrip={
                                "El proyecto fue desarrollado utilizando React, aprovechando Hooks y Redux para una gestión eficiente del estado. Se integraron API Services para consumir datos externos y Google Maps para funciones geoespaciales. El diseño se implementó con SCSS, resultando en una aplicación moderna y funcional."
                            }
                        />
                    </a>
                </div>
                <div data-aos="fade-up">
                    <a
                        href="https://galleryappjuanjo543.netlify.app/"
                        target="_blank"
                        className="projectUrl"

                    >
                        <CardProjects
                            title={"Gallery App"}
                            img={galleryApp}
                            descrip={
                                "El proyecto fue desarrollado utilizando React, API Services y Tailwind CSS con el objetivo de ofrecer imágenes libres de derechos de autor, proporcionando una experiencia de usuario moderna y funcional."
                            }
                        />
                    </a>
                </div>
                <div data-aos="fade-left">
                    <CardProjects
                        title={"Cooming soon..."}
                        descrip={"Proyectos nuevos en desarrollo"}
                    />
                </div>
            </section>
        </div>
    );
};

export default Projects;
