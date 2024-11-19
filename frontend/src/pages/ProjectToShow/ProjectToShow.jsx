import { motion } from "framer-motion"; // Import Framer Motion
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProjectsContext } from "../../context/ProjectsContext";
import { Helmet } from "react-helmet-async";
import ResponsiveImages from "../../components/ResponsiveImages/ResponsiveImages";

import "./project-to-show.scss";

const ProjectToShow = () => {
    const { id } = useParams();
    const { projects, loading, error } = useContext(ProjectsContext);

    useEffect(() => {
        const images = document.querySelectorAll(".template__right--images");   
        images.forEach((img) => {
            // console.log("image actuelles chargées", img.currentSrc);
            // console.log("srcSet dans le DOM:", img.getAttribute("srcset"));
            
            img.onload = () => {
                const loadedWidth = img.naturalWidth;
                const srcLoaded = img.currentSrc;

                // if (!srcLoaded) {
                //     console.log("Image non chargée : aucun src trouvé.");
                //     return;
                // }

                let format;
                if (loadedWidth <= 375) {
                    format = "375w";
                } else if (loadedWidth <= 768) {
                    format = "768w";
                } else {
                    format = "1200w";
                }

                console.log(`Image chargées : ${srcLoaded} | format : ${format}`);
                img.srcSet = `${project.modalImages[0].srcSet[format]} ${format}`;
            };

            console.log("Image srcSet:", img.srcSet);
            console.log("Image sizes:", img.sizes);

        });
    }, [projects]);

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur lors du chargement des projets {error}</div>;

    const project = projects.find((project) => project.id === parseInt(id));

    if (!project) return <div>Projet introuvable</div>;

    // console.log("Project data:", project);


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
        <section>
            <Helmet>
                <title>{`${project.title} | ${project.presentation} | Portfolio de Constantin`}</title>
                <meta
                    name="description"
                    content={`${
                        project.description
                    } - Ce projet met en avant des compétences en ${project.technologies.join(
                        ", "
                    )}.`}
                />
                <link
                    rel="canonical"
                    href={`https://portfolio-dugards-projects.vercel.app/project/${project.id}`}
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={`${project.title} | ${project.presentation} | Projet de Constantin`}
                />
                <meta
                    property="og:description"
                    content={`${
                        project.description
                    }. Découvrez ce projet axé sur ${project.technologies.join(
                        ", "
                    )}.`}
                />
                <meta
                    property="og:url"
                    content={`https://portfolio-dugards-projects.vercel.app/project/${project.id}`}
                />
                <meta
                    property="og:image"
                    content={`https://portfolio-dugards-projects.vercel.app${project.cardImage.srcSet["1200w"]}`}
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content={`${project.title} | ${project.presentation} | Projet de Constantin`}
                />
                <meta
                    name="twitter:description"
                    content={`${
                        project.description
                    }. Un projet utilisant ${project.technologies.join(", ")}.`}
                />
                <meta
                    name="twitter:image"
                    content={`https://portfolio-dugards-projects.vercel.app${project.cardImage.srcSet["1200w"]}`}
                />
                <meta name="robots" 
                content="index, follow" 
                />
            </Helmet>
            <section className="project-details">
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={titleVariant}
                >
                    {project.title}
                </motion.h1>
                <div className="template__container">
                    <motion.section
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
                                        <strong>{task.task}:</strong>{" "}
                                        {task.details}
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
                    </motion.section>
                    <motion.section
                        className="template__right"
                        initial="hidden"
                        animate="visible"
                        variants={rightVariant}
                    >
                        {project.modalImages?.length > 0 ? (
                            project.modalImages.map((image, index) => (
                                <ResponsiveImages
                                    key={index}
                                    src={image.srcSet.default}
                                    srcSet={`${image.srcSet["375w"]} 375w, ${image.srcSet["768w"]} 768w, ${image.srcSet["1200w"]} 1200w`}
                                    sizes="(max-width: 480px) 375px, (max-width: 768px) 768px, (min-width: 769px) 1200px"
                                    alt={image.alt}
                                    loading="lazy"
                                    className="template__right--images"
                                    />
                            ))
                        ) : (
                            <p>Aucune image disponible.</p>
                        )}
                        {/* <img
                            src="/images/nina-carducci-min/camera-740-min.webp"
                            srcSet="/images/nina-carducci-min/camera-375-min.webp 375w, /images/nina-carducci-min/camera-768-min.webp 768w, /images/nina-carducci-min/camera-1200-min.webp 1200w"
                            sizes="(max-width: 375px) 375px, (max-width: 768px) 768px, (min-width: 769px) 1200px"
                            alt="Image test"
                            className="template__right--images"
                            loading="lazy"
                        /> */}
                    </motion.section>
                </div>
            </section>
        </section>
    );
};

export default ProjectToShow;
