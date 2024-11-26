import React from "react";
import PropTypes from "prop-types";
import "./close-icon.scss";

const CloseIcon = ({ className = "", onClick, ...props }) => {
    return (
        <button
            className={`close-icon ${className}`}
            onClick={onClick}
            aria-label="Fermer"
            {...props}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z" />
            </svg>
        </button>
    );
};

CloseIcon.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func, 
};

export default CloseIcon;
