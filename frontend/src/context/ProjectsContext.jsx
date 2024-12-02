import React, { createContext, useEffect, useState } from "react";

// Fournisseur du contexte
export const ProjectsProvider = ({ children }) => {
    const [projects, setProjects] = useState(() => {
        const savedProjects = localStorage.getItem("projects");
        // console.log("Récup des projets depuis localStorage:", savedProjects);
        return savedProjects ? JSON.parse(savedProjects) : [];
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("/projectsData/projects.json");
                if (!response.ok) {
                    throw new Error("Erreur lors du chargement des projets.");
                }
                const data = await response.json();
                setProjects(data);
                localStorage.setItem("projects", JSON.stringify(data));
                // console.log("Sauvegarde des projets dans localStorage:", data);
            } catch (err) {
                // console.error("Fetch error:", err);
                setError(err.message);
            } finally {
                // console.log("Chargement des projets terminé.");
                setLoading(false);
            }
        };

        fetchProjects();
    }, [projects.lengh]);

    return (
        <ProjectsContext.Provider value={{ projects, loading, error }}>
            {children}
        </ProjectsContext.Provider>
    );
};

export const ProjectsContext = createContext();
