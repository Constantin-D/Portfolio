import React from "react";
// import Profile from "./../../assets/images/Profile-512-min.webp";
import { FaGithub, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom"; 
import "./hero.scss";

const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero__image">
                <h1>Intégrateur web</h1>
                <img
                    className="hero__image--profile"
                    src="/images/Profile-512-min.webp"
                    alt="Profile"
                />
            </div>
            <div className="hero__separator"></div>
            <div className="hero__presentation">
                <p>Bonjour, je suis</p>
                <h2>Constantin Dugard</h2>
                <p className="hero__presentation--description">
                    Je crée des sites web modernes et performants avec une
                    attention particulière pour l'optimisation et
                    l'accessibilité.
                </p>
                <div className="hero__presentation--social">
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="twitter-link"
                    >
                        <FaXTwitter />
                    </a>
                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin-link"
                    >
                        <FaLinkedinIn />
                    </a>
                </div>
                <div className="hero__presentation--link">
                    <Link to="/about">En savoir plus</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
