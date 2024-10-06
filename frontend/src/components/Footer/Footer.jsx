import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import "./footer.scss";

const socialLinks = [
    {
        href: "https://github.com/",
        icon: <FaGithub />,
        label: "GitHub",
    },
    {
        href: "https://twitter.com/",
        icon: <FaXTwitter />,
        label: "Twitter",
    },
    {
        href: "https://linkedin.com/",
        icon: <FaLinkedinIn />,
        label: "LinkedIn",
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
                        {link.icon} {link.label}
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
