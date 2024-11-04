import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import { ProjectsContext } from "../../context/ProjectsContext";

import "./project-to-show.scss";

const ProjectToShow = () => {
    const { id } = useParams();
    const { projects, loading, error } = useContext(ProjectsContext);

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur lors du chargement des projets {error}</div>;

    const project = projects.find((project) => project.id === parseInt(id));

    if (!project) return <div>Projet introuvable</div>;

    // Variants for animations
    const titleVariant = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const leftVariant = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: 0.2 },
        },
    };

    const rightVariant = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: 0.2 },
        },
    };

    return (
        <section className="project-details">
            <motion.h1
                initial="hidden"
                animate="visible"
                variants={titleVariant}
            >
                {project.title}
            </motion.h1>
            <div className="template__container">
                <motion.div
                    className="template__left"
                    initial="hidden"
                    animate="visible"
                    variants={leftVariant}
                >
                    <h3>Description</h3>
                    <p>{project.description}</p>
                    <h3>Objectifs</h3>
                    {project.assignment && (
                        <ul className="template__left--assignment">
                            {project.assignment.map((task, index) => (
                                <li key={index}>
                                    <strong>{task.task}:</strong> {task.details}
                                </li>
                            ))}
                        </ul>
                    )}
                    <h3>Technologies</h3>
                    {project.technologies && (
                        <ul className="template__left--technologies">
                            {project.technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    )}
                    <div className="project-date">
                        <p>
                            <span>Date du projet : </span>
                            {project.date}
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    className="template__right"
                    initial="hidden"
                    animate="visible"
                    variants={rightVariant}
                >
                    {project.modalImages?.length > 0 ? (
                        project.modalImages.map((image, index) => (
                            <img
                                key={index}
                                src={image.srcSet.default}
                                srcSet={`${
                                    image.srcSet["375w"] || image.srcSet.default
                                } 375w, ${
                                    image.srcSet["768w"] || image.srcSet.default
                                } 768w, ${
                                    image.srcSet["1200w"] ||
                                    image.srcSet.default
                                } 1200w`}
                                sizes="(max-width: 375px) 375px, (max-width: 768px) 768px, 1200px"
                                alt={image.alt}
                                className="template__right--images"
                                loading="lazy"
                            />
                        ))
                    ) : (
                        <p>Aucune image disponible.</p>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectToShow;
