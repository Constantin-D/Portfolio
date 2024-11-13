import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import Card from "../../components/Card/Card";
import PageTransition from "../../components/PageTransition/PageTransition";
import ProjectModal from "../../components/ProjectModal/ProjectModal";
import { ProjectsContext } from "../../context/ProjectsContext";

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
                    <title>Mes projets | Portfolio de Constantin</title>
                    <meta
                        name="description"
                        content="Découvrez les projets réalisés au cours de la formation Intégrateur web d'OpenClassrooms, incluant en autres, des travaux en HTML, CSS, JavaScript et React."
                    />
                    <link
                        rel="canonical"
                        href="https://portfolio-dugards-projects.vercel.app/projects"
                    />
                    <meta property="og:type" content=" website" />
                    <meta
                        property="og:title"
                        content="Mes projets de formation | Portfolio de Constantin"
                    />
                    <meta
                        property="og:description"
                        content="Parcourez les divers projets réalisés dans le cadre de la formation Intégrateur Web d'OpenClassrooms, incluant des compétences en développement web. "
                    />
                    <meta
                        property="og:url"
                        content="https://portfolio-dugards-projects.vercel.app/projects"
                    />
                    <meta
                        property="og:image"
                        content="https://portfolio-dugards-projects.vercel.app/images/profile-512-min.webp"
                    />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta
                        name="twitter:title"
                        content="Mes projets de formation | Portfolio de Constantin"
                    />
                    <meta
                        name="twitter:description"
                        content="Découvrez les projets créés durant ma formation chez OpenClassrooms, montrant mes compétences en développement web."
                    />
                    <meta
                        name="twitter:image"
                        content="https://portfolio-dugards-projects.vercel.app/images/profile-512-min.webp"
                    />
                    <meta name="robots" 
                    content="index, follow" 
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
