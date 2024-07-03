import React from "react";
import cl from "./HeroCard.module.css";
import { Link } from "react-router-dom";

const HeroCard = ({ img, text, name, color }) => {
    return (
        <div className={cl.cardWrapper} style={{ "--color-card": color }}>
            <div className={cl.content}>
                <h1>{name}</h1>
                <p>{text}</p>
                <Link to={name.toLowerCase()}>Read More</Link>
            </div>
            <img alt={name} src={img} />
        </div>
    );
};

export default HeroCard;
