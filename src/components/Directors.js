import React from "react";
import { directors } from "../data";
import DirectorCard from "./DirectorCard";

function Directors() {
  const renderDirectorList = directors.map((director, i) => <DirectorCard key={i} name={director.name} movies={director.movies}/>)
  
  return (
    <div>
      <h1>Directors Page</h1>
      { renderDirectorList }
    </div>
  )
}

export default Directors;
