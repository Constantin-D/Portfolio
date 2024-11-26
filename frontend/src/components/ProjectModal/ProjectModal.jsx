import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import CloseIcon from "./../Icons/CloseIcon/CloseIcon";

import "./project-modal.scss";

const ProjectModal = ({ project, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleToggleModal = () => {
        setIsVisible(false); // Déclenche l'animation de fermeture
    };

    // Si le projet est undefined, ne pas rendre la modale
    if (!project) return null;

    useEffect(() => {
        if (isVisible) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [isVisible]);

    return (
        <AnimatePresence
            onExitComplete={onClose} // Appel de onClose après l'animation de sortie
        >
            {isVisible && (
                <div
                    className="modal-overlay"
                    role="dialog"
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    onClick={(e) => {
                        if (e.target.classList.contains("modal-overlay")) {
                            handleToggleModal();
                        }
                    }}
                >
                    <motion.div
                        className="modal__content"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 50,
                        }}
                    >
                        <div className="modal__close-container">
                            <CloseIcon
                                className="modal__close"
                                onClick={handleToggleModal}
                            />
                        </div>

                        <h2 id="modal-title">{project.title}</h2>
                        <div className="modal__container">
                            {/* Partie gauche pour la description */}
                            <section className="modal__left">
                                <p>{project.description}</p>

                                {project.technologies && (
                                    <ul className="modal__left--technologies">
                                        {project.technologies.map(
                                            (tech, index) => (
                                                <li key={index}>{tech}</li>
                                            )
                                        )}
                                    </ul>
                                )}
                                <div className="project-date">
                                    <p>
                                        <span>Date du projet : </span>
                                        {project.date}
                                    </p>
                                </div>
                            </section>

                            {/* Partie droite pour les images */}
                            <section className="modal__right">
                                {project.modalImages?.length > 0 ? (
                                    project.modalImages.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image.srcSet.default}
                                            srcSet={`${
                                                image.srcSet["375w"] ||
                                                image.srcSet.default
                                            } 375w, ${
                                                image.srcSet["768w"] ||
                                                image.srcSet.default
                                            } 768w, ${
                                                image.srcSet["1200w"] ||
                                                image.srcSet.default
                                            } 1200w`}
                                            sizes="(max-width: 375px) 375px, (max-width: 768px) 768px, 1200px"
                                            alt={image.alt}
                                            className="modal__right--images"
                                            loading="lazy"
                                        />
                                    ))
                                ) : (
                                    <p>Aucune image disponible.</p>
                                )}
                            </section>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
