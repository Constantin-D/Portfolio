import React, { useState } from "react";
import HtmlIcon from "/icons/html5.svg";
import CssIcon from "/icons/css3.svg";
import SassIcon from "/icons/sass-2.svg";
import JsIcon from "/icons/javascript.svg";
import ReactIcon from "/icons/reactjs.svg";
import ReduxIcon from "/icons/redux.svg";
import UiUxIcon from "/icons/ui-ux.svg";
import FigmaIcon from "/icons/figma.svg";
import SeoIcon from "/icons/seo.svg";
import AgileIcon from "/icons/agile.svg";

import "./filter-skills.scss";

const skillsData = {
    frontend: [
        {
            name: "HTML/CSS",
            icon: [HtmlIcon, CssIcon],
            description: "Création de pages web structurées et stylisées.",
        },
        {
            name: "SASS",
            icon: [SassIcon],
            description:
                "Préprocesseur CSS pour un code plus propre et maintenable.",
        },
        {
            name: "JavaScript/React",
            icon: [JsIcon, ReactIcon],
            description:
                "Langage de programmation pour des interactions dynamiques.",
        },
        {
            name: "Redux",
            icon: [ReduxIcon],
            description: "Gestion de l'état pour les applications React.",
        },
    ],
    design: [
        {
            name: "UI/UX Design",
            icon: [UiUxIcon, FigmaIcon],
            description: "Conception d'interfaces utilisateur intuitives.",
        },
    ],
    tools: [
        {
            name: "SEO",
            icon: [SeoIcon],
            description:
                "Optimisation du référencement pour améliorer la visibilité.",
        },
        {
            name: "Agile/Scrum",
            icon: [AgileIcon],
            description: "Méthodologie de gestion de projet collaborative.",
        },
    ],
};

const FilterSkills = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const categories = ["all", ...Object.keys(skillsData)];
    const filteredSkills =
        selectedCategory === "all"
            ? [
                  ...skillsData.frontend,
                  ...skillsData.design,
                  ...skillsData.tools,
              ]
            : skillsData[selectedCategory];

    return (
        <div className="filter-skills">
            <div className="filter-skills__buttons">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={
                            selectedCategory === category ? "active" : ""
                        }
                    >
                        {category === "all"
                            ? "Toutes"
                            : category.charAt(0).toUpperCase() +
                              category.slice(1)}
                    </button>
                ))}
            </div>
            <ul className="filter-skills__list">
                {filteredSkills.map((skill, index) => (
                    <li key={index} className="filter-skills__list--item">
                        <div className="icon-container">
                            {skill.icon.map((src, id) => (
                                <img
                                    key={id}
                                    src={src}
                                    alt={`${skill.name} icon`}
                                    className={`skill-icon ${src === ReactIcon ? "rotate" : ""}`}
                                />
                            ))}
                        </div>
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

