import React, { createContext, useEffect, useState } from "react";

// Fournisseur du contexte
export const ProjectsProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("/projectsData/projects.json");
                console.log("response", response);
                if (!response.ok) {
                    throw new Error("Erreur lors du chargement des projets.");
                }
                const data = await response.json();
                setProjects(data);
            } catch (err) {
                console.error("Fetch error:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <ProjectsContext.Provider value={{ projects, loading, error }}>
            {children}
        </ProjectsContext.Provider>
    );
};

export const ProjectsContext = createContext();
