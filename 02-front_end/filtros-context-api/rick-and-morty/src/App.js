import React from 'react';
import Characters from './components/Characters';
import Filters from './components/Filters';
import CharactersProvider from './context/CharactersProvider';


function App() {
  return (
    <CharactersProvider>
      <Filters />
      <Characters />
    </CharactersProvider>
  );
}

export default App;
