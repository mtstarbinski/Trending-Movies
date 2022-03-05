import './App.css';
import ListGrid from './components/List Grid/ListGrid';
import { useState, useEffect } from "react";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [selected, setSelected] = useState('Movies')
  const [filtered, setFiltered] = useState(movies);

  useEffect(() => {
    const fetchData = async () => {
      const [first, second, third, fourth] = await Promise.all([
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        .then((res) => res.json()),
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=2`)
        .then((res) => res.json()),
        fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        .then((res) => res.json()),
        fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=2`)
        .then((res) => res.json()),
      ]);
      setMovies([...first.results, ...second.results]);
      setShows([...third.results, ...fourth.results]);
    };
    
    fetchData();

    }, []);

    useEffect(() => {
      var filteredList;

      if (selected === "Movies") {
        filteredList = movies.filter((movie) => {
          return movie.title.toLocaleLowerCase().includes(searchField);
        });
      } else {
        filteredList = shows.filter((show) => {
          return show.name.toLocaleLowerCase().includes(searchField);
        });
      }

      setFiltered(filteredList);
    }, [selected, searchField, movies, shows]);

  

  return (
    <div className="App">
      <h1 className="app-title">Current Trending {selected}</h1>
      <ListGrid list={filtered} selected={selected} setSelected={setSelected} setSearchField={setSearchField}/>
    </div>
  );
};



export default App;
