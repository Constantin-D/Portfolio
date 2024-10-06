import React, { useContext, useState } from "react";
import { ProjectsContext } from "../../context/ProjectsContext";
import Card from "../../components/Card/Card";
import ProjectModal from "../../components/ProjectModal/ProjectModal";
import PageTransition from "../../components/PageTransition/PageTransition";

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
                    <h2 className="projects__title">Mes Projets</h2>
                    <p>Chargement des projets...</p>
                </section>
            </PageTransition>
        );
    }

    if (error) {
        return (
            <PageTransition>
                <section className="projects">
                    <h2 className="projects__title">Mes Projets</h2>
                    <p>Erreur : {error}</p>
                </section>
            </PageTransition>
        );
    }

    return (
        <PageTransition>
            <section className="projects">
                <h2 className="projects__title">Mes Projets</h2>
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
        </PageTransition>
    );
};

export default Projects;
