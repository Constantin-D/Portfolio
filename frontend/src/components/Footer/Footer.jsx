import React from "react";
import SocialIcons from "./../Icons/SocialIcons/SocialIcons";

import "./footer.scss";

const socialLinks = [
    {
        href: "https://github.com/Constantin-D",
        platform: "github",
    },
    {
        href: "https://twitter.com/",
        platform: "twitter",
    },
    {
        href: "https://linkedin.com/",
        platform: "linkedin",
    },
];

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2024 Mon Portfolio. Tous droits réservés.</p>
            <div className="footer__links">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visitez mon profil ${link.platform}`}
                        className="logo-link"
                    >
                        <SocialIcons
                            platform={link.platform}
                            className="footer-icon"
                        />
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
