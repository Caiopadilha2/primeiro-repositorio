import React, { useContext, useState } from 'react';
import CharactersContext from '../context/CharactersContext';

const initialCharInfo = {
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
  };

const Filters = () => {
  const { name, setName, setFilters } = useContext(CharactersContext);
  const [charInfo, setCharInfo] = useState(initialCharInfo);


  const handleChangeCharInfo = ({ target: { id, value } }) => {
    setCharInfo((prevCharInfo) => ({
      ...prevCharInfo,
      [id]: value,
      // id pode ser 'status', 'species' ou 'gender'.
      // id vai ser o do target e o value vai ser o valor selecionado.
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setFilters(charInfo);
    // charInfo é meu objeto, que vai POPULAR LÁ NO PROVIDER. 09min aula thalles filtragem. 
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   ...charInfo,
    // }));
    setCharInfo(initialCharInfo);
  };

  return(
      <form 
        style={ { textAlign: "center", marginBottom: "20px"} }
        onSubmit={ handleSubmit }
        >
          <label htmlFor="name">
              Name:
              <input
              id="name"
              type="text"
              value={ name }
              onChange={ ({ target: { value } }) => setName(value) }
              />
          </label>

          <label htmlfor="status">
              Status:
              <select
               id="status"
               value={ charInfo.status }
               onChange={ handleChangeCharInfo }
              >
                <option>Alive</option>
                <option>Dead</option>
                <option>Unknown</option>
              </select>
          </label>

          <label htmlfor="species">
              Species:
              <select
               id="species"
               value={ charInfo.species }
               onChange={ handleChangeCharInfo }
              >
                <option>Human</option>
                <option>Alien</option>
                <option>Unknown</option>
              </select>
          </label>

          <label htmlfor="gender">
              Gender:
              <select
               id="gender"
               value={ charInfo.gender }
               onChange={ handleChangeCharInfo }
              >
                <option>Male</option>
                <option>Female</option>
                <option>Unknown</option>
              </select>
          </label>

          <button type="submit">
            Filtrar
          </button>
      </form>
  )
};

export default Filters;