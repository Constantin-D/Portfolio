import React, { useState } from "react";
import { AiOutlineStock } from "react-icons/ai";
import { DiScrum } from "react-icons/di";
import { FaReact, FaSass } from "react-icons/fa";
import { IoIosPulse, IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import { SiCss3, SiRedux, SiFigma } from "react-icons/si";
// import { motion, AnimatePresence } from "framer-motion";

import "./filter-skills.scss";

const skillsData = {
    frontend: [
        {
            name: "HTML/CSS",
            icon: (
                <>
                    <IoLogoHtml5 />
                    <SiCss3 />
                </>
            ),
            description: "Création de pages web structurées et stylisées.",
            category: "frontend",
        },
        {
            name: "SASS",
            icon: <FaSass />,
            description:
                "Préprocesseur CSS pour un code plus propre et maintenable.",
            category: "frontend",
        },
        {
            name: "JavaScript/React",
            icon: (
                <>
                    <IoLogoJavascript />
                    <FaReact />
                </>
            ),
            description:
                "Langage de programmation pour des interactions dynamiques. Et la bibliothèque React pour des interfaces utilisateurs réactives.",
            category: "frontend",
        },
        {
            name: "Redux",
            icon: <SiRedux />,
            description: "Gestion de l'état pour les applications React.",
            category: "frontend",
        },
    ],
    design: [
        {
            name: "UI/UX Design",
            icon: (
                <>
                    <AiOutlineStock />
                    <SiFigma />
                </>
            ),
            description: "Conception d'interfaces utilisateur intuitives.",
        },
    ],
    tools: [
        {
            name: "SEO",
            icon: <IoIosPulse />,
            description:
                "Optimisation du référencement pour améliorer la visibilité.",
            category: "tools",
        },
        {
            name: "Agile",
            icon: <DiScrum />,
            description: "Méthodologie de gestion de projet collaborative.",
            category: "tools",
        },
    ],
};

// Correspond à la liste des compétences
const allSkills = [
    ...skillsData.frontend,
    ...skillsData.design,
    ...skillsData.tools,
];

const FilterSkills = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const filteredSkills =
        selectedCategory === "all" ? allSkills : skillsData[selectedCategory];

    return (
        <div className="filter-skills">
            <div className="filter-skills__buttons">
                <button onClick={() => setSelectedCategory("all")}>
                    Toutes
                </button>
                <button onClick={() => setSelectedCategory("frontend")}>
                    Frontend
                </button>
                <button onClick={() => setSelectedCategory("design")}>
                    Design
                </button>
                <button onClick={() => setSelectedCategory("tools")}>
                    Outils
                </button>
            </div>

            <ul
                className={`filter-skills__list ${
                    selectedCategory === "all" ? "all-category" : ""
                }`}
            >
                {filteredSkills.map((skill, index) => (
                    <li key={index} className="filter-skills__list--item">
                        {skill.icon}
                        {selectedCategory !== "all" && (
                            <>
                                <h4>{skill.name}</h4>
                                <p>{skill.description}</p>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilterSkills;
