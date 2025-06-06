import React from "react";
import Title from "./Title";
import CardProjects from "./CardProjects";
import "./scss/Projects.scss";
import photoSearch from "./../assets/project1.png";
import galleryApp from "./../assets/project.png";
import gamingNextjs from "./../assets/Project2.png";

const Projects = () => {
    return (
        <div className="containerProjects">
            <Title title={"Proyectos"} />
            <section className="containerCardProjects">
                <div data-aos="fade-right">
                    <CardProjects
                        title={"Gaming Nextjs y Strapi"}
                        img={gamingNextjs}
                        descrip={
                            " El proyecto fue desarrollado utilizando Nextjs, Strapi, API Services y Tailwind CSS con el objetivo de ofrecer un blog de videojuegos, proporcionando una experiencia de usuario moderna y funcional. Este fue desarrollado junto con un curso de nextjs"
                        }
                        code={
                            "https://github.com/JuanJo5433/ecommerce-nextjs-gaming"
                        }
                        demo={"https://ecommerce-nextjs-gaming.vercel.app/"}
                    />
                </div>
                <div data-aos="fade-down">
                    <CardProjects
                        title={"PhotoSearch"}
                        img={photoSearch}
                        descrip={
                            "El proyecto fue desarrollado utilizando React, aprovechando Hooks y Redux para una gestión eficiente del estado. Se integraron API Services para consumir datos externos y Google Maps para funciones geoespaciales. El diseño se implementó con SCSS, resultando en una aplicación moderna y funcional."
                        }
                        code={
                            "https://github.com/JuanJo5433/photo-search/tree/master"
                        }
                        demo={"https://photosearchjj.netlify.app/"}
                    />
                </div>
                <div data-aos="fade-left">
                    <CardProjects
                        title={"Gallery App"}
                        img={galleryApp}
                        descrip={
                            "El proyecto fue desarrollado utilizando React, API Services y Tailwind CSS con el objetivo de ofrecer imágenes libres de derechos de autor, proporcionando una experiencia de usuario moderna y funcional."
                        }
                        code={"https://github.com/JuanJo5433/Gallery-App"}
                        demo={"https://galleryappjuanjo543.netlify.app/"}
                    />
                </div>

                {/* <div data-aos="fade-left">
                    <CardProjects
                        title={"Cooming soon..."}
                        descrip={"Proyectos nuevos en desarrollo"}
                    />
                </div> */}
            </section>
        </div>
    );
};

export default Projects;
