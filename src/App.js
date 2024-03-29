import {useState, useEffect} from "react";
import MovieCard from "./MovieCard";
import Helmet from 'react-helmet';

import './App.css';
import SearchIcon from './search.svg'
//8e050c99 - API Key

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=8e050c99";

const App = () =>{
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async(title) =>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies('Spiderman');
    },[]);

    return(
        <div className="app">
            <Helmet>
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
            </Helmet>
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e)=> setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={()=>searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length>0 ? (
                    <div className="container">
                        {movies.map((movie)=>(
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>Search "Batman" OR any movie that you like</h2>
                    </div>
                )
            }
        </div>
        
    );
}

export default App;