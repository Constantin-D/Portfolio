import React, { useState } from "react";
// import { AiOutlineStock } from "react-icons/ai";
// import { DiScrum } from "react-icons/di";
// import { FaReact, FaSass } from "react-icons/fa";
// import { IoIosPulse, IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
// import { SiCss3, SiFigma, SiRedux } from "react-icons/si";
// import { motion, AnimatePresence } from "framer-motion";

import "./filter-skills.scss";

const skillsData = {
    frontend: [
        {
            name: "HTML/CSS",
            // icon: (
            //     <>
            //         <IoLogoHtml5 />
            //         <SiCss3 />
            //     </>
            // ),
            icon: ["/icons/html5.svg", "/icons/css3.svg"],
            description: "Création de pages web structurées et stylisées.",
            category: "frontend",
        },
        {
            name: "SASS",
            // icon: <FaSass />,
            icon: ["/icons/sass-2.svg"],
            description:
                "Préprocesseur CSS pour un code plus propre et maintenable.",
            category: "frontend",
        },
        {
            name: "JavaScript/React",
            // icon: (
            //     <>
            //         <IoLogoJavascript />
            //         <FaReact />
            //     </>
            // ),
            icon: ["/icons/javascript.svg", "/icons/reactjs.svg"],
            description:
                "Langage de programmation pour des interactions dynamiques. Et la bibliothèque React pour des interfaces utilisateurs réactives.",
            category: "frontend",
        },
        {
            name: "Redux",
            // icon: <SiRedux />,
            icon: ["/icons/redux.svg"],
            description: "Gestion de l'état pour les applications React.",
            category: "frontend",
        },
    ],
    design: [
        {
            name: "UI/UX Design",
            // icon: (
            //     <>
            //         <AiOutlineStock />
            //         <SiFigma />
            //     </>
            // ),
            icon: ["/icons/ui-ux.svg", "/icons/figma.svg"],
            description: "Conception d'interfaces utilisateur intuitives.",
        },
    ],
    tools: [
        {
            name: "SEO",
            // icon: <IoIosPulse />,
            icon: ["/icons/seo.svg"],
            description:
                "Optimisation du référencement pour améliorer la visibilité.",
            category: "tools",
        },
        {
            name: "Agile/Scrum",
            // icon: <DiScrum />,
            icon: ["/icons/agile.svg"],
            description: "Méthodologie de gestion de projet collaborative.",
            category: "tools",
        },
    ],
};

// copie des skills dans un tableau
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
                        <div className="icon-container">
                            {skill.icon.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`{skill.name} icon`}
                                    className="skill-icon"
                                />
                            ))}
                        </div>
                        {/* {skill.icon} */}
                        <h4>{skill.name}</h4>
                        {selectedCategory !== "all" && (
                            <p>{skill.description}</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilterSkills;
