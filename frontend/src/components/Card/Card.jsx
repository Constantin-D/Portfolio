import React from "react";
import "./card.scss";

const Card = ({ project, onClick, showSliderCardDetails }) => {
    const { srcSet, alt } = project.cardImage;

    return (
        <section className="card" onClick={onClick}>
            <img
                src={srcSet.default}
                srcSet={`${srcSet["375w"] || srcSet.default} 375w, ${
                    srcSet["768w"] || srcSet.default
                } 768w, ${srcSet["1200w"] || srcSet.default} 1200w`}
                sizes="(max-width: 375px) 375px, (max-width: 768px) 768px, 1200px"
                className="card__image"
                alt={alt}
                loading="lazy"
            />
            <h4 className="card__title">{project.title}</h4>
            <p className="card__description">{project.presentation}</p>
            <button className="card__button" onClick={showSliderCardDetails}>
                Voir plus
            </button>
        </section>
    );
};

export default Card;
