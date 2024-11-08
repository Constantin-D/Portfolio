import React, { useContext, useState } from "react";
import Card from "../../components/Card/Card";
import PageTransition from "../../components/PageTransition/PageTransition";
import ProjectModal from "../../components/ProjectModal/ProjectModal";
import { ProjectsContext } from "../../context/ProjectsContext";
import { Helmet } from "react-helmet-async";

import "./projects.scss";

const Projects = () => {
    const { projects, loading, error } = useContext(ProjectsContext);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    if (loading) {
        return (
            <PageTransition>
                <section className="projects">
                    <h1 className="projects__title">Mes Projets</h1>
                    <p>Chargement des projets...</p>
                </section>
            </PageTransition>
        );
    }

    if (error) {
        return (
            <PageTransition>
                <section className="projects">
                    <h1 className="projects__title">Mes Projets</h1>
                    <p>Erreur : {error}</p>
                </section>
            </PageTransition>
        );
    }

    return (
        <PageTransition>
            <section>
                <Helmet>
                    <title>Mes projets</title>
                    <meta
                        name="description"
                        content="Les projets réalisés au cours de la formation Intégrateur web d'OpenClassrooms"
                    />
                    <link
                        rel="canonical"
                        href="https://portfolio-3675bwfws-dugards-projects.vercel.app/"
                    />
                    <meta property="og:type" content=" website" />
                    <meta property="og:title" content="Les projets récents" />
                    <meta
                        property="og:description"
                        content="Découvrez les divers projets réalisés "
                    />
                    <meta
                        property="og:url"
                        content="https://portfolio-3675bwfws-dugards-projects.vercel.app/"
                    />
                    <meta
                        property="og:image"
                        content="https://portfolio-3675bwfws-dugards-projects.vercel.app/images/profile-512-min.webp"
                    />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="" />
                    <meta name="twitter:description" content="" />
                    <meta
                        name="twitter:image"
                        content="https://portfolio-3675bwfws-dugards-projects.vercel.app/images/profile-512-min.webp"
                    />
                </Helmet>
                <section className="projects">
                    <h1 className="projects__title">Mes Projets</h1>
                    <div className="projects__list">
                        {projects.length > 0 ? (
                            projects.map((project) => (
                                <Card
                                    key={project.id}
                                    project={project}
                                    onClick={() => handleOpenModal(project)}
                                />
                            ))
                        ) : (
                            <p>Aucun projet disponible pour l'instant.</p>
                        )}
                    </div>

                    {selectedProject && (
                        <ProjectModal
                            project={selectedProject}
                            onClose={closeModal}
                        />
                    )}
                </section>
            </section>
        </PageTransition>
    );
};

export default Projects;
