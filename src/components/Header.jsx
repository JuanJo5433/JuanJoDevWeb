import React from "react";
import "./scss/Header.scss";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
              
                <a href="#projects" className="navLink">
                    Proyectos
                </a>
                <a href="#skills" className="nav-link">
                    Habilidades
                </a>
                <a href="#experience" className="nav-link">
                    Experiencia y Estudio
                </a>
                <a href="#contact" className="nav-link">
                    Contacto
                </a>
            </nav>
        </header>
    );
};

export default Header;
