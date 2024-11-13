import { motion } from "framer-motion";
import React from "react";
import PageTransition from "../../components/PageTransition/PageTransition";
import { Helmet } from "react-helmet-async";

import "./about.scss";

const aboutSections = [
    {
        subtitle: "Intégrateur Web",
        description: `Passionné par le développement web, je m'engage à acquérir une expertise dans la création de sites web modernes, performants et optimisés. Mon parcours de formation chez OpenClassrooms a mis un accent particulier sur l'accessibilité, l'optimisation et le respect de l'environnement, adoptant une approche de green code pour un impact plus durable.`,
        delay: 0.2,
    },
    {
        subtitle: "Expérience et Compétences",
        description: `J'ai développé une bonne expertise en technologies front-end, notamment HTML, CSS, JavaScript et React, et je continue à perfectionner ces compétences à travers mes projets. 
        J'ai également des compétences en design UI/UX et SEO, garantissant que chaque projet soit esthétiquement agréable tout en étant bien classé sur les moteurs de recherche.`,
        delay: 0.4,
    },
    {
        subtitle: "Projets et Réalisations",
        description: `Au cours de mon apprentissage, j'ai eu l'opportunité de travailler sur plusieurs projets, personnels et professionnels. Ces expériences me permettent de perfectionner mes compétences et de fournir des solutions adaptées aux besoins de mes futurs clients.`,
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
            <section>
                <Helmet>
                    <title>À propos de moi | Portfolio de Constantin</title>
                    <meta
                        name="description"
                        content="Découvrez mon parcours en tant qu’intégrateur web avec OpenClassrooms, mes compétences, et mon expérience dans le développement web."
                    />
                    <link
                        rel="canonical"
                        href="https://portfolio-dugards-projects.vercel.app/about"
                    />
                    <meta property="og:type" content=" website" />
                    <meta
                        property="og:title"
                        content=">À propos de moi | Portfolio de Constantin"
                    />
                    <meta
                        property="og:description"
                        content="Parcours, compétences et expérience en intégration web et développement React. Apprenez-en plus sur moi et mon expertise en développement web."
                    />
                    <meta
                        property="og:url"
                        content="https://portfolio-dugards-projects.vercel.app/about"
                    />
                    <meta
                        property="og:image"
                        content="https://portfolio-dugards-projects.vercel.app/images/profile-512-min.webp"
                    />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta
                        name="twitter:title"
                        content="À propos de moi | Portfolio de Constantin"
                    />
                    <meta
                        name="twitter:description"
                        content="Découvrez mon parcours et mes compétences en intégration web et développement React."
                    />
                    <meta
                        name="twitter:image"
                        content="https://portfolio-dugards-projects.vercel.app/images/profile-512-min.webp"
                    />
                    <meta name="robots" 
                    content="index, follow" 
                    />
                </Helmet>
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
            </section>
        </PageTransition>
    );
};

export default About;
