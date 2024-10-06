import React from "react";
import { Link } from "react-router-dom";
import "./not-found.scss";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>La page que vous recherchez n'existe pas.</p>
            <Link to="/" className="home">
                Retour à l'accueil
            </Link>
        </div>
    );
};

export default NotFound