import { motion } from "framer-motion";
import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Contact from "../../components/Contact/Contact";
import FilterSkills from "../../components/FilterSkills/FilterSkills";
import Hero from "../../components/Hero/Hero";
import PageTransition from "../../components/PageTransition/PageTransition";
import Slider from "../../components/Slider/Slider";
import { ProjectsContext } from "../../context/ProjectsContext";
import { Helmet } from "react-helmet-async";

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
            <Helmet>
                <title>Accueil - Portfolio</title>
                <meta
                    name="description"
                    content="Découvrez les projets de mon portfolio, mes compétences et mon parcours en tant que développeur."
                />
                <link rel="canonical" href="https://votre-site.fr/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Accueil - Portfolio" />
                <meta
                    property="og:description"
                    content="Découvrez mes projets récents et mes compétences en développement web."
                />
                <meta property="og:url" content="https://votre-site.fr/" />
                <meta property="og:image" content="lien/vers/une/image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Accueil - Portfolio" />
                <meta
                    name="twitter:description"
                    content="Découvrez mes projets récents et mes compétences en développement web."
                />
                <meta name="twitter:image" content="lien/vers/une/image.jpg" />
            </Helmet>
            <section className="home">
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
                    id="contact"
                    className="home__contact"
                >
                    <div>
                        <h3>Pour une collaboration ou une question</h3>
                    </div>
                    <div>
                        <p>
                            Remplissez le formulaire ci-dessous. Je serais ravi
                            d'échanger avec vous.
                        </p>
                    </div>
                    {/* <Link to="/contact" className="home__contact-cta--link">
                        Contactez-moi !
                    </Link> */}
                    <Contact />
                </motion.section>
            </section>
        </PageTransition>
    );
};

export default Home;
