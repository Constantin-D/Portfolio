import { motion } from "framer-motion"; // Import Framer Motion
import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import ResponsiveImages from "../../components/ResponsiveImages/ResponsiveImages";
import { ProjectsContext } from "../../context/ProjectsContext";
// import githubIcon from "/icons/github-icon.svg";
import BackToIcon from "../../components/Icons/BackToIcon/BackToIcon";

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

                console.log(
                    `Image chargées : ${srcLoaded} | format : ${format}`
                );
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
                <meta name="robots" content="index, follow" />
            </Helmet>
            <section>
                <section className="project-details">
                    <BackToIcon />
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
                            <div className="project-links">
                                <p className="project-links_text">Code source du projet</p>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Dirige vers le code source sur GitHub pour ${project.title}`}
                                >
                                    <svg
                                        className="project-links__icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 1024 1024"
                                        role="img"
                                        aria-hidden="true"
                                    >
                                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5C64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9c26.4 39.1 77.9 32.5 104 26c5.7-23.5 17.9-44.5 34.7-60.8c-140.6-25.2-199.2-111-199.2-213c0-49.5 16.3-95 48.3-131.7c-20.4-60.5 1.9-112.3 4.9-120c58.1-5.2 118.5 41.6 123.2 45.3c33-8.9 70.7-13.6 112.9-13.6c42.4 0 80.2 4.9 113.5 13.9c11.3-8.6 67.3-48.8 121.3-43.9c2.9 7.7 24.7 58.3 5.5 118c32.4 36.8 48.9 82.7 48.9 132.3c0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9c177.1-59.7 304.6-227 304.6-424.1c0-247.2-200.4-447.3-447.5-447.3" />
                                    </svg>
                                </a>
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
        </section>
    );
};

export default ProjectToShow;
