import React from "react";
import cl from "./About.module.css";
import me from "../../img/me.jpg";
import react from "../../img/react.webp";
import node from "../../img/node.png";

const About = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.mainContainer}>
                <div className={cl.textArea}>
                    <h1>Frontend</h1>
                    <h1>Developer</h1>
                    <p>I like to craft solid and scalable frontend products</p>
                    <p>with great user experience</p>
                </div>
                <div className={cl.imgWrapper}>
                    <img alt={"me_photo"} src={me} draggable={"false"} />
                </div>
            </div>

            <div className={cl.comments}>
                <p>
                    Highly skilled at progressive enhancement, design systems &
                    UI Engineering
                </p>
                <p>
                    Over a decade of experience building products for clients
                    across several countries
                </p>
                <img alt={"react"} src={react} draggable={"false"} />
                <img alt={"nodeJS"} src={node} draggable={"false"} />
            </div>
        </div>
    );
};

export default About;
