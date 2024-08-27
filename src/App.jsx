import React from "react";
import Backgroud from "./components/Backgroud";
import "./App.scss";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ExperienceStudies from "./components/Experience&Studies";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <div className="content">
                <Header />
                <main>
                    <section id="profile">
                        <Profile />
                    </section>
                    <section id="projects">
                        <Projects />
                    </section>
                    <section id="skills">
                        <Skills />
                    </section>
                    <section id="experience">
                        <ExperienceStudies />
                    </section>
                    <section id="contact">
                        <ContactMe />
                    </section>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
            <div className="backGround">
                <Backgroud />
            </div>
        </>
    );
}

export default App;
