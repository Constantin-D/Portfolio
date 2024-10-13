import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProjectsContext } from "../../context/ProjectsContext";
import Hero from "../../components/Hero/Hero";
import Slider from "../../components/Slider/Slider";
import PageTransition from "../../components/PageTransition/PageTransition";
import FilterSkills from "../../components/FilterSkills/FilterSkills";

import "./home.scss";

const Home = () => {
    const { projects, loading, error } = useContext(ProjectsContext);

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
                        Voir tous les projets
                    </Link>
                </section>

                <section className="home__skills">
                    <h2>Mes Compétences</h2>
                    <FilterSkills />
                </section>

                <section className="home__contact-cta">
                    <h2>Contact</h2>
                    <p>Vous avez un projet en tête ?</p>
                    <Link to="/contact" className="home__contact-cta--link">
                        Contactez-moi !
                    </Link>
                </section>
            </div>
        </PageTransition>
    );
};

export default Home;
