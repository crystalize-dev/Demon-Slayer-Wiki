import React from 'react';
import {characters} from "../../characters/characters";
import HeroCard from "../../components/heroCard/HeroCard";


const Characters = () => {
    return (
        <>
            {
                characters.map(character => <HeroCard key={character.name}
                                                      name={character.name}
                                                      text={character.description}
                                                      img={character.img}
                                                      color={character.color}/>)
            }
        </>
    );
};

export default Characters;