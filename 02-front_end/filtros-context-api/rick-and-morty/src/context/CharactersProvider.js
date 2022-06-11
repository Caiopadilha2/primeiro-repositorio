import React, { useEffect, useState } from 'react';
import CharactersContext from './CharactersContext';
import fetchCharacters from '../services/fetchCharacters';

const CharactersProvider = ({ children }) => {

  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');
  const [filters, setFilters] = useState({
    status: '',
    species: '',
    gender: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const charactersData = await fetchCharacters();
      setCharacters(charactersData);
    };
    fetchData(); 
  }, []);

  const charactersContext = {
    characters,
    name, 
    setName,
    filters,
    setFilters,
  }

  return (
      <CharactersContext.Provider value={ charactersContext }>
        { children }
      </CharactersContext.Provider>
  )
}

export default CharactersProvider;