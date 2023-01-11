import './App.css';
import {useState} from "react";
import Header from "./components/header/Header";
import HeroCard from "./components/heroCard/HeroCard";

import {characters} from "./characters/characters";

function App() {
    const [header, setHeader] = useState(true)

  return (
      <div className="wrapper" onClick={() => setHeader(false)}>
          <Header header={header} setHeader={setHeader} onClick={(e) => e.stopPropagation()}/>

          <div className="contentArea">
              {
                  characters.map(character => <HeroCard key={character.name}
                                                        name={character.name}
                                                        text={character.description}
                                                        img={character.img}
                                                        color={character.color}/>)
              }
          </div>
      </div>
  );
}

export default App;
