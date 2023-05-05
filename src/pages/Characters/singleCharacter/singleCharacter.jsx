import React from 'react';
import {useParams} from "react-router-dom";
import cl from "./singleCharacter.module.css";
import {characters} from "../../../hardcode/characters";


const SingleCharacter = () => {
    const data = useParams()
    let character = characters.filter(character => character.name.toLowerCase() === data.name)[0]

    return (
        <div className={cl.wrapper}>
            <div className={cl.mainContainer}>
                <div className={cl.textArea}>
                    <h1 style={{color: character.color}}>{character.name}</h1>
                    <p>{character.description}</p>
                </div>

                <div className={cl.imgWrapper} style={{background: character.color, "--color": character.color}}>
                    <img alt={"character_photo"} src={character.img} draggable={"false"}/>
                </div>
            </div>
        </div>
    );
};

export default SingleCharacter;