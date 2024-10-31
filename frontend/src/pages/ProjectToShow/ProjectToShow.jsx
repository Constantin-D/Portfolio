import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProjectsContext } from "../../context/ProjectsContext";

const ProjectToShow = () => {
    const { id } = useParams();
    const { projects, loading, error } = useContext(ProjectsContext);

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur lors du chargement des projets {error}</div>;

    const project = projects.find((project) => project.id === id); 

    if (!project) return <div>Projet introuvable</div>;

  return (
      <div className="project-details">
          ProjectToShow
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <p>{project.dificulties}</p>
          <h2>Assignments</h2>
      </div>
  );
}

export default ProjectToShow