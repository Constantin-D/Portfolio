import React from "react";
import PropTypes from "prop-types";
import "./icon.scss";

const Icon = ({ src, altText, className = "", onClick, ...props }) => {
    return (
        <img
            src={src}
            alt={altText}
            className={`icon ${className}`}
            onClick={onClick}
            {...props}
        />
    );
};

Icon.propTypes = {
    src: PropTypes.string.isRequired, 
    altText: PropTypes.string.isRequired, 
    className: PropTypes.string, 
    onClick: PropTypes.func,
};

// const Icon = ({ icon, altText, className }) => {
//     return (
//         <span
//             className={`icon ${className || ""}`}
//             role="img"
//             aria-label={altText}
//         >
//             {icon}
//         </span>
//     );
// };

// Icon.propTypes = {
//     icon: PropTypes.element.isRequired, // On attend un composant React ici (SVG)
//     altText: PropTypes.string.isRequired,
//     className: PropTypes.string,
// };

export default Icon;
