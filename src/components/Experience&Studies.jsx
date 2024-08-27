import React from "react";
import Title from "./Title";
import "./scss/Experience&Studies.scss";
import Experience from "./Experience";
import Studie from "./Studie";

const ExperienceStudies = () => {
    return (
        <div className="ExperienceStudiesContainer">
            <Title title={"Experiencia y Estudios"} />
            <div className="ExperienceStudiesContent">
              <div className="experienceContainer">
                <h1>Experiencia</h1>
                <Experience company={"GLOBANT"} time={"2024"} rol={"Front-End Developer"} descrip={"Durante mis prácticas en esta empresa, desarrollé diversos proyectos que me permitieron consolidar mis conocimientos y habilidades. Además, completé varios cursos que enriquecieron mi formación, mejorando tanto mis competencias como programador como mis habilidades personales."}/>
                
                <Experience company={"GOBERNACION DE RISARALDA"} time={"2023"} rol={"Back-End Developer"} descrip={"Participé en el desarrollo de un proyecto para la gestión de inventario de equipos electrónicos en el área de educación, con el propósito de mejorar el seguimiento y control de cada equipo perteneciente a la entidad."}/>
              </div>
              <div className="studiesContainer">
                <h1>Estudios</h1>
                <Studie company={"GLOBANT"} time={"2024"} rol={"Bootcamp Web UI developer"} descrip={"Participé en un Bootcamp donde desarrollé y mejoré mis habilidades en frontend, utilizando tecnologías como React, SCSS, Vitest, entre otras."}/>
                <Studie company={"SENA"} time={"2022-2024"} rol={"Tecnologo en Analisis y Desarrollo de Software"} descrip={"Me formé como programador, aprendiendo y utilizando lenguajes como Python, PHP, JavaScript, y tecnologías como HTML, CSS, MySQL, y Postman. También me especialicé en la recolección de requisitos y el análisis de sistemas, con el objetivo de ofrecer las mejores soluciones a los clientes. Además, desarrollé habilidades blandas, lo que me permitió mejorar tanto profesional como personalmente."}/>

                
              </div>
            </div>
        </div>
    );
};

export default ExperienceStudies;
