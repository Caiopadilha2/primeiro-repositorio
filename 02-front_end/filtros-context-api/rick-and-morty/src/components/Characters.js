import React, { useContext } from 'react';
import CharactersContext from '../context/CharactersContext';
import FilterCharacters from '../helpers/FilterCharacters';
import CharCard from './CharCard';

const Characters = () => {
  const { characters, name, filters } = useContext(CharactersContext);

  return(
    <div style={ { display: "flex", gap: "10px", flexWrap: "wrap" } }>
     {
      FilterCharacters(characters, name, filters).map((char) => <CharCard key={ char.id } { ...char }/>)
     }
     </div>
    )
}

export default Characters;