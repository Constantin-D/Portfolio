import React from "react";
import "./card.scss";

const Card = ({ project, onClick }) => {
    const { srcSet, alt } = project.cardImage;
    
   return (
       <div className="card" onClick={onClick}>
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
           <button className="card__button">Voir plus</button>
       </div>
   );
};

export default Card;
