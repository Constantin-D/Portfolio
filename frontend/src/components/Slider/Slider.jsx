import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import ArrowButton from "./../Icons/ArrowButton/ArrowButton";

import "./slider.scss";

const Slider = ({ projects }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    if (!projects || projects.length === 0) return <div>Loading...</div>;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // 3 cartes
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1)); // 3 cartes
    };

    const handleCardClick = (id) => {
        navigate(`/project/${id}`);
    };

    return (
        <div className="slider">
            {/* Flèches de Navigation */}
            <div className="slider__arrow slider__arrow--left">
                <ArrowButton
                    direction="left"
                    onClick={prevSlide}
                />
            </div>
            <div className="slider__arrow slider__arrow--right">
                <ArrowButton
                    direction="right"
                    onClick={nextSlide}
                />
            </div>

            {/* Slide Actuelle */}
            <div
                className="slider__slide"
                onClick={() => handleCardClick(projects[currentIndex].id)}
            >
                <Card project={projects[currentIndex]} />
            </div>

            {/* Indicateurs */}
            <div className="slider__indicators">
                {projects.map((_, index) => (
                    <div
                        key={index}
                        className={`slider__indicator ${
                            index === currentIndex ? "active" : ""
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
