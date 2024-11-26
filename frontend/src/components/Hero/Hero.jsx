import React from "react";
import { motion } from "framer-motion";
import SocialIcons from "./../Icons/SocialIcons/SocialIcons"
import { Link } from "react-router-dom"; 

import "./hero.scss";

const Hero = () => {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="hero-container"
        >
            <div className="hero__image">
                <h1>Intégrateur web</h1>
                <img
                    className="hero__image--profile"
                    src="/images/profile/Profile-768-min.webp"
                    srcSet="/images/profile/Profile-375-min.webp 375w,
                            /images/profile/Profile-768-min.webp 768w,
                            /images/profile/Profile-1200-min.webp 1200w"
                    sizes="(max-width: 480px) 375px, 
                           (max-width: 768px) 768px, 
                           1200px"
                    alt="Avatar de profil "
                    loading="lazy"
                />
            </div>
            <div className="hero__separator"></div>
            <div className="hero__presentation">
                <p>Bienvenue sur mon Portfolio, je suis</p>
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

                    >
                        <SocialIcons platform="github" />
                    </a>
                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visitez mon profil Twitter"
                    >
                        <SocialIcons platform="twitter" />
                    </a>
                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SocialIcons platform="linkedin" />
                    </a>
                </div>
                <div className="hero__presentation--link">
                    <Link to="/about">Pour en savoir plus sur moi</Link>
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;
