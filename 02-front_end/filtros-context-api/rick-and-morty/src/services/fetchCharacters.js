const fetchCharacters = async () => {
  const URL = 'https://rickandmortyapi.com/api/character';

  const request = await fetch(URL);
  const response = await request.json();
  return response.results;
};

export default fetchCharacters;

