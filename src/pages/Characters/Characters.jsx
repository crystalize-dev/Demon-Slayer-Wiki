import React from 'react';
import {characters} from "../../hardcode/characters";
import HeroCard from "../../components/heroCard/HeroCard";
import cl from "./Characters.module.css";


const Characters = () => {
    return (
        <div className={cl.wrapper}>
            {
                characters.map(character => <HeroCard key={character.name}
                                                      name={character.name}
                                                      text={character.description}
                                                      img={character.img}
                                                      color={character.color}/>)
            }
        </div>
    );
};

export default Characters;