import React from "react";
import PropTypes from "prop-types";
import "./arrow-button.scss";

const ArrowButton = ({ direction, className = "", ...props }) => {
    return (
        <button
            className={`arrow-button arrow-button--${direction} ${className}`}
            aria-label={`Bouton ${direction}`}
            {...props} // props comme "onClick" ou "style ..."
        >
            <svg
                className="arrow-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                {direction === "left" ? (
                    <path d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z" />
                ) : (
                    <path d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z" />
                )}
            </svg>
        </button>
    );
};

ArrowButton.propTypes = {
    direction: PropTypes.oneOf(["left", "right"]).isRequired,
    className: PropTypes.string,
};

export default ArrowButton;


