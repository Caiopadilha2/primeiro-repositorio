const FilterCharacters = (characters, filterName, filters) => {
  let filteredChars = [ ...characters];
  
  filteredChars = filteredChars.
    filter(({ name }) => name.toLowerCase().includes(filterName.toLowerCase()));
  // filtro por nome primeiro e, o RESULTADO DISSO, uso para os outros filtros.
  

  const filtersValues = Object.values(filters);
  // console.log(filtersValues);

  if (filtersValues.every((filter) => filter)) {
    filteredChars = filteredChars.filter(({ status, species, gender }) => (
        status === filters.status
        && species === filters.species
        && gender === filters.gender
    )); 
  }
    return filteredChars;
}

  export default FilterCharacters;