import React from "react";
import PropTypes from "prop-types";

import "./menu-icons.scss";

const MenuIcon = ({
    type,
    className = "",
    width = "1.5rem",
    height = "1.5rem",
    fill = "currentColor",
    ...props
}) => {
    const renderIcon = () => {
        switch (type) { 
            case "menu-bars":
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={width}
                        height={height}
                        viewBox="0 0 48 48"
                        fill="none"
                        stroke={fill}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                        className={`menu-icon ${className}`}
                        {...props}
                    >
                        <g>
                            <path d="M7.94971 11.9497H39.9497" />
                            <path d="M7.94971 23.9497H39.9497" />
                            <path d="M7.94971 35.9497H39.9497" />
                        </g>
                    </svg>
                );
            case "menu-close":
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={width}
                        height={height}
                        viewBox="0 0 24 24"
                        fill={fill}
                        className={`menu-icon ${className}`}
                        {...props}
                    >
                        <path d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return <>{renderIcon()}</>;
};

MenuIcon.propTypes = {
    type: PropTypes.oneOf(["menu-bars", "menu-close"]).isRequired,
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    fill: PropTypes.string,
};

export default MenuIcon;
