// noinspection JSValidateTypes

import React from 'react';
import cl from "./HeroCard.module.css"


const HeroCard = ({img, text, name, color}) => {
    return (
        <div className={cl.cardWrapper} style={{"--color": color}}>
            <div className={cl.content}>
                <h1>{name}</h1>
                <p>{text}</p>
                <button>Read More</button>
            </div>

            <img alt={name} src={img}/>
        </div>
    );
};

export default HeroCard;