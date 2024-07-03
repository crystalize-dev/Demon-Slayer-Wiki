import React from "react";
import cl from "./reviewCard.module.css";
import { getEmptyStars, getFullStars } from "../../utility/getStars";

const ReviewCard = ({ name, date, rate, text }) => {
    const keys = [1, 2, 3, 4, 5];
    const keysUnfilled = [6, 7, 8, 9, 10];

    return (
        <div className={cl.wrapper}>
            <div className={cl.header}>
                <div className={cl.name}>
                    <h1>{name}</h1>
                    <p>{date}</p>
                </div>
                <div className={cl.stars}>
                    {getFullStars(rate, keys)}
                    {getEmptyStars(rate, keysUnfilled)}
                </div>
            </div>
            <p>{text}</p>
        </div>
    );
};

export default ReviewCard;
