import { motion } from "framer-motion";
import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Contact from "../../components/Contact/Contact";
import FilterSkills from "../../components/FilterSkills/FilterSkills";
import Hero from "../../components/Hero/Hero";
import PageTransition from "../../components/PageTransition/PageTransition";
import Slider from "../../components/Slider/Slider";
import { ProjectsContext } from "../../context/ProjectsContext";

import "./home.scss";

const Home = () => {
    const { projects, loading, error } = useContext(ProjectsContext);
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView();
            }
        }
    }, [location]);

    // Filtre des projets 4, 6, et 7
    const selectedProjects = projects.filter((project) =>
        [4, 6, 7].includes(project.id)
    );

    if (loading) {
        return (
            <PageTransition>
                <div className="home">
                    <Hero />
                    <section className="home__projects">
                        <h3>Mes Projets</h3>
                        <p>Chargement des projets...</p>
                    </section>
                </div>
            </PageTransition>
        );
    }

    if (error) {
        return (
            <PageTransition>
                <div className="home">
                    <Hero />
                    <section className="home__projects">
                        <h2>Mes Projets</h2>
                        <p>Erreur : {error}</p>
                    </section>
                </div>
            </PageTransition>
        );
    }

    return (
        <PageTransition>
            <div className="home">
                <Hero />

                <section className="home__projects">
                    <h2>Mes Projets</h2>
                    <p>
                        Découvrez mes projets récents et les technologies
                        utilisées.
                    </p>

                    {selectedProjects.length > 0 ? (
                        <Slider projects={selectedProjects} />
                    ) : (
                        <p>Aucun projet disponible pour l'instant.</p>
                    )}

                    <Link to="/projects" className="home__projects-button">
                        Voir tous mes projets de formation
                    </Link>
                </section>

                <section id="skills" className="home__skills">
                    <h2>Mes Compétences</h2>
                    <FilterSkills />
                </section>

                <motion.section
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    id="contact" className="home__contact-cta"
                >
                    {/* <h2>Contactez-moi</h2> */}
                    {/* <Link to="/contact" className="home__contact-cta--link">
                        Contactez-moi !
                    </Link> */}
                    <Contact />
                </motion.section>
            </div>
        </PageTransition>
    );
};

export default Home;
