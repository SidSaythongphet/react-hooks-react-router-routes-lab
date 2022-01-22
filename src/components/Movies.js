import React from "react";
import { movies } from "../data";
import MovieCard from "./MovieCard";

function Movies() {
  const renderMovieList = movies.map(movie => <MovieCard key={movie.title} title={movie.title} time={movie.time} genres={movie.genres}/>)
  return (
    <div>
      <h1>Movies Page</h1>
      { renderMovieList}
    </div>
  )
}

export default Movies;
