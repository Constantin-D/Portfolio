import React from "react";
import "./card.scss";

const Card = ({ project, onClick }) => {
    
   return (
        <div className="card" onClick={onClick}>
            <img
                src={project.cardImage}
                className="card__image"
                alt={project.title}
                // width="1200"
                // height="auto"
                // style={{ maxWidth: "100%", height: "auto" }}
            />
            <h4 className="card__title">{project.title}</h4>
            <p className="card__description">{project.presentation}</p>
            <button className="card__button">Voir plus</button>
        </div>
    );
};

export default Card;
