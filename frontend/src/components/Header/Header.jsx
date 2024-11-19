import React, { useEffect, useRef, useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "./header.scss";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef();
    const location = useLocation();

    const toggleMenu = (e) => {
        e.stopPropagation(); // Évite la fermeture immédiatement du menu
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const closeMenu = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) { 
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("click", closeMenu);
        return () => {
            document.removeEventListener("click", closeMenu);
        };
    }, []); // [] pour n'exécuter qu'une seule fois

    const navLinks = [
        { path: "about", label: "À propos de moi" },
        { path: "projects", label: "Projets" },
        { path: "skills", label: "Compétences", isHashLink: true },
        { path: "contact", label: "Contactez-moi", isHashLink: true },
    ];

    return (
        <section>
            <header className="header">
                <div className="header__logo">
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>
                        <img
                            src="/images/logo/Logo-1-768-min.webp"
                            srcSet="/images/logo/Logo-1-375-min.webp 375w, /images/logo/Logo-1-768-min.webp 768w, /images/logo/Logo-1-1200-min.webp 1200w"
                            sizes="(max-width: 375px) 375px, (max-width: 768px) 768px, 1200px"
                            alt="Logo"
                            loading="lazy"
                        />
                    </Link>
                </div>
                <nav
                    ref={menuRef}
                    className={`header__nav ${
                        isMenuOpen ? "header__nav--open" : ""
                    }`}
                >
                    <ul onClick={() => setIsMenuOpen(false)}>
                        {location.pathname !== "/" && (
                            <li>
                                <Link
                                    to="/"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Accueil
                                </Link>
                            </li>
                        )}
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                {link.isHashLink ? (
                                    <HashLink
                                        smooth
                                        to={`/#${link.path}`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.label}
                                    </HashLink>
                                ) : (
                                    <Link
                                        to={`/${link.path}`}
                                        className={
                                            location.pathname ===
                                            `/${link.path}`
                                                ? "active"
                                                : ""
                                        }
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="header__bars" onClick={toggleMenu}>
                    {/* {isMenuOpen ? <FaTimes /> : <FaBars />} */}
                    {isMenuOpen ? (
                        <img
                            src="/icons/menu-close.svg"
                            alt="Fermer"
                            className="close-icon"
                        />
                    ) : (
                        <img
                            src="/icons/menu-bars.svg"
                            alt="Menu"
                            className="menu-icon"
                        />
                    )}
                </div>
            </header>
        </section>
    );
};

export default Header;
