import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
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
            onExitComplete={onClose} // Appel de onClose après l'animation exit
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
                        <button
                            className="modal__close"
                            onClick={handleToggleModal}
                            aria-label="Fermer la modale"
                        >
                            <FaTimes />
                        </button>
                        <h2 id="modal-title">{project.title}</h2>
                        <div className="modal__container">
                            {/* Partie gauche pour la description */}
                            <div className="modal__left">
                                <p>{project.description}</p>
                                <p>{project.assignment}</p>
                                {project.technologies && (
                                    <ul className="modal__technologies">
                                        {project.technologies.map(
                                            (tech, index) => (
                                                <li key={index}>{tech}</li>
                                            )
                                        )}
                                    </ul>
                                )}
                            </div>

                            {/* Partie droite pour les images */}
                            <div className="modal__right">
                                {project.modalImages?.length > 0 ? (
                                    project.modalImages.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`${project.title} - ${
                                                index + 1 
                                            }`}
                                            className="modal__image"
                                        />
                                    ))
                                ) : (
                                    <p>Aucune image disponible.</p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
