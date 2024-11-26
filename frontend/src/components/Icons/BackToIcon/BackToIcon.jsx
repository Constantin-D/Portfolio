import React from "react";
import { useNavigate } from "react-router-dom";
import "./back-to-icon.scss";

const BackToIcon = ({
    // color = "#888888",
    // size = "32px",
    // strokeWidth = "2",
}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/#home-projects"); 
    };

    return (
        <button
            className="back-to-icon"
            onClick={handleClick}
            aria-label="Retour au carrosel de projets"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                // width={size}
                // height={size}
                viewBox="0 0 24 24"
                // strokeLinecap="round"
                // strokeLinejoin="round"
                // className="back-to-icon__svg"
            >
                <path d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z" />
            </svg>
        </button>
    );
};

export default BackToIcon;
