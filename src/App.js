import './App.css';
import {useEffect, useState} from 'react';
import MovieCard from './MovieCard';
function App() {
  const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=48a523509844cfa4da8192188b6adb4a"
  const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=48a523509844cfa4da8192188b6adb4a&query="
  const [movies,setMovies]=useState([]);
  const [term,setTerm]=useState('');
  const handleSearch=(e)=>{
      e.preventDefault();
      fetch(API_SEARCH+term)
      .then(res=>res.json())
      .then(data=>setMovies(data.results));
  }
  useEffect(()=>{
    fetch(API_URL).then(res=>res.json()).then(data=>setMovies(data.results))
  },[])
  console.log(movies)
  return (
    <div className="App">
      <div className="search_nav">
        <div className='title'>
          <h1>Movies</h1>
        </div>
        <div className='search_box'>
          <form onSubmit={handleSearch}>
            <input on onChange={(e)=>setTerm(e.target.value)}/>
            <button>Search</button>
          </form>
        </div>
      </div>
      <div className="movies">
        {movies.map((movie)=>(
            <MovieCard {...movie}/>
        ))}
      </div>
      
    </div>
  );
}

export default App;
