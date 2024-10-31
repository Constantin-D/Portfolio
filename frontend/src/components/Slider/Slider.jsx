import React, { useState } from "react";
// import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
            {/* Flèches de Navigation pour Desktop */}
            <button
                className="slider__arrow slider__arrow--left"
                onClick={prevSlide}
            >
                <IoIosArrowBack className="slider__arrow-icon" />
            </button>
            <button
                className="slider__arrow slider__arrow--right"
                onClick={nextSlide}
            >
                <IoIosArrowForward className="slider__arrow-icon" />
            </button>

            {/* Slide Actuelle */}
            <div
                className="slider__slide"
                onClick={() => handleCardClick(projects[currentIndex].link)}
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

