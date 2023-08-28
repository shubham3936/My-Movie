import React from 'react'
import { useEffect, useState } from 'react'
import "./HomePageContent.css";
import Row from "./Row/Row";
function HomePageContent() {

  // apikey = "bb3f62d77570154f48e64c7a1e4235db"

  const BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY = "bb3f62d77570154f48e64c7a1e4235db";

  const topRatedMoviesApiUrl = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  const popularMoviesApiUrl = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const nowPlayingMoviesApiUrl = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&p`;

  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [popularMovies, setpopularMovies] = useState([])
  const [nowPlayingMovies, setnowPlayingMovies] = useState([])

  function callApi(url,setVariable) {
    fetch(url)
    .then((res) => res.json())
    .then((data) => setVariable(data.results))
    .catch((err) => console.log(err));
  }



  useEffect(() => {
    callApi(topRatedMoviesApiUrl,setTopRatedMovies);
    callApi(popularMoviesApiUrl,setpopularMovies);
    callApi(nowPlayingMoviesApiUrl,setnowPlayingMovies);

  }, [])
  

  return (
    <div>
        {/* {topRatedMovies.map((value, key) => (
            //  <p>{value.title}</p>
        ))} */}
        <div className="homepagecontent_container">
            {topRatedMovies.length >0 && (
              <Row 
                rowTitle="Top Rated Movies"
                moviesArray={topRatedMovies}
                posterPath={true}
              />
            )}
            {popularMovies.length >0 && (
              <Row 
                rowTitle="Popular Movies"
                moviesArray={popularMovies}
                posterPath={true}
              />
            )}
            {nowPlayingMovies.length >0 && (
              <Row 
                rowTitle="Now Playing Movies"
                moviesArray={nowPlayingMovies}
                posterPath={true}
              />
            )}
        </div>
    </div>
  );
}

export default HomePageContent;