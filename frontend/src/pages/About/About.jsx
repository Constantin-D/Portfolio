import { motion } from "framer-motion";
import React from "react";
import PageTransition from "../../components/PageTransition/PageTransition";

import "./about.scss";

const aboutSections = [
    {
        subtitle: "Intégrateur Web",
        description: `Passionné par le développement web, je m'engage à acquérir une expertise dans la création de sites web modernes, performants et optimisés. Mon parcours de formation chez OpenClassrooms a mis un accent particulier sur l'accessibilité, l'optimisation et le respect de l'environnement, adoptant une approche de green code pour un impact plus durable.`,
        delay: 0.2,
    },
    {
        subtitle: "Expérience et Compétences",
        description: `Je possède de solides connaissances en technologies front-end telles que HTML, CSS, JavaScript, et React. 
        J'ai également des compétences en design UI/UX et SEO, garantissant que chaque projet soit esthétiquement agréable tout en étant bien classé sur les moteurs de recherche.`,
        delay: 0.4,
    },
    {
        subtitle: "Projets et Réalisations",
        description: `Au cours de mon apprentissage, j'ai eu l'opportunité de travailler sur plusieurs projets, personnels et professionnels. Ces expériences m'ont permis de perfectionner mes compétences et de fournir des solutions adaptées aux besoins de mes futurs clients.`,
        delay: 0.6,
    },
];

// Variants for cascading animation
const titleVariant = {
    hidden: { opacity: 0, x: -50 },
    // visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const subtitleVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: (custom) => ({
        opacity: 1,
        x: 0,
        transition: { delay: custom, duration: 0.5 }, // 0.6
    }),
};

const descriptionVariant = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
        opacity: 1,
        transition: { delay: custom + 0.2, duration: 0.6 }, // 0.8
    }),
};

const About = () => {
    return (
        <PageTransition>
            <section className="about">
                <motion.h2
                    className="about__title"
                    variants={titleVariant}
                    initial="hidden"
                    animate="visible"
                >
                    À propos de moi
                </motion.h2>
                {aboutSections.map((section, index) => (
                    <React.Fragment key={index}>
                        <motion.h3
                            className="about__subtitle"
                            custom={section.delay}
                            variants={subtitleVariant}
                            initial="hidden"
                            animate="visible"
                        >
                            {section.subtitle}
                        </motion.h3>
                        <motion.p
                            className="about__description"
                            custom={section.delay}
                            variants={descriptionVariant}
                            initial="hidden"
                            animate="visible"
                        >
                            {section.description}
                        </motion.p>
                    </React.Fragment>
                ))}
            </section>
        </PageTransition>
    );
};

export default About;
