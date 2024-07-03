import React from "react";
import cl from "./MyInputRange.module.css";
import Icon from "../icon/icon";

const MyInputRange = ({ rate, setRate }) => {
    const stars = [1, 2, 3, 4, 5];

    const setRating = (star) => {
        setRate(star * 2);
    };

    return (
        <div className={cl.wrapper}>
            <p>Your Rating:</p>
            <div>
                {stars.map((star) => (
                    <Icon
                        key={star}
                        style={{
                            fontVariationSettings: `'FILL' ${
                                star <= rate / 2 ? 1 : 0
                            }, 'wght' 200`,
                        }}
                        onClick={() => setRating(star)}
                    >
                        star
                    </Icon>
                ))}
            </div>
        </div>
    );
};

export default MyInputRange;
