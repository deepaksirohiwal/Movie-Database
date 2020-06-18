import React, {useState} from "react";
import Card from './card';

const SearchMovies=function(props){
    
    //states- input query, movies
    const [query, setQuery] = useState('');
    //create the state for movies, and update that state appropriate
    const [movies, setMovies] = useState([]);
    
    const searching = async (e) => {
        e.preventDefault();
        
        
        

const url = `https://api.themoviedb.org/3/search/movie?api_key=API_KEY&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }
    
    return (
        <>
            <form className="form" onSubmit={searching}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query"
                    placeholder="i.e. Jurassic Park"
                    value={query} onChange={(e) => setQuery(e.target.value)}
                    />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card--list">
                {movies.filter(movie=>movie.poster_path).map(movie => (  // filtering movies having poster and than mapping to display the information
                    <Card movie={movie}/>                
                ))}
            </div>
        </>
    )
}
export default SearchMovies;