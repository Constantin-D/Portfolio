import React from "react";
import SocialIcons from "./../Icons/SocialIcons/SocialIcons";

import "./footer.scss";

const socialLinks = [
    {
        href: "https://github.com/",
        platform: "github",
        // label: "GitHub",
    },
    {
        href: "https://twitter.com/",
        platform: "twitter",
        // label: "Twitter",
    },
    {
        href: "https://linkedin.com/",
        platform: "linkedin",
        // label: "LinkedIn",
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
                        className="logo-link"
                    >
                        <SocialIcons
                            platform={link.platform}
                            className="footer-icon"
                        />
                        {/* {link.label} */}
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
