import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [titleFilter, setTitleFilter] = useState('');
  const [filterType, setFilterType] = useState('id');
  const [operator, setOperator] = useState('maior que');
  const [value, setValue] = useState(0);
  const [numericFilters, setNumericFilters] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const request = await fetch('https://gutendex.com/books');
      const data = await request.json();
      // console.log(data);
      setData(data.results);
      setFilteredData(data.results);
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    const filteredBooks = data.filter((book) => book.title.toLowerCase().includes(titleFilter.toLowerCase()));
    // console.log(numericFilters)
    // setFilteredData(filteredBooks);
    // Esse aqui era antes de ter os multiplos filtros.

    const resultArray = numericFilters.reduce((accumulator, filter) => {
      return accumulator.filter((book) => {
        switch(filter.operator) {
          case "maior que":
            return book[filter.filterType] > Number(filter.value); 
          case "menor que":
            return book[filter.filterType] < Number(filter.value);
          case "igual a":
            return book[filter.filterType] === Number(filter.value);
          default:
            return true;
        }
      }
      )}, filteredBooks);
    
    setFilteredData(resultArray);

  }, [titleFilter, numericFilters, data]);

  const handleTitleFilter = ({target}) => {
    setTitleFilter(target.value);
  }

  const handleNumericFilter = () => {
    // console.log(filterType, operator, value)
    const newNumericFilter = {
      filterType, 
      operator,
      value,
    }
    setNumericFilters([...numericFilters, newNumericFilter])
  }

  const handleDeleteFilter = (index) => {
    const filtersAfterDelete = numericFilters.filter((_item, itemIndex) => itemIndex !== index)
    setNumericFilters(filtersAfterDelete);
  }
  
  return (
    <div >
      <form>
        <input
        type="text"
        placeholder="Book title" 
        onChange={ handleTitleFilter }
        />
        <hr/>
        <label>
          Filter type
          <select onChange={({target}) => setFilterType(target.value)}>
            <option>id</option>
            <option>download_count</option>
          </select>
        </label>

        <label>
          Operator
          <select onChange={({target}) => setOperator(target.value)}>
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>

        <input
          type="number"
          placeholder="0"
          onChange={({target}) => setValue(target.value)}
          />

        <button type="button" onClick={ handleNumericFilter }>
          Filter
        </button>
      </form>

      {numericFilters.map(
        (filter, index) => (
        <p
         key={`${filter.filterType}-${index}`}
         onClick={() => handleDeleteFilter(index) }
         >
           {`${filter.filterType} ${filter.operator} ${filter.value}`}</p>
        )
      )}

      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Authors</th>
          <th>Download Count</th>
        </tr>
        </thead>
        <tbody>
          {filteredData.map(book => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.authors.map(author => author.name)}</td>
              <td>{book.download_count}</td>
            </tr>  
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
