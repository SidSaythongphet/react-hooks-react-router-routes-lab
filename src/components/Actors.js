import React from "react";
import { actors } from "../data";
import ActorCard from "./ActorCard";

function Actors() {
  const renderActorList = actors.map((actor, i) => <ActorCard key={i} name={actor.name} movies={actor.movies}/>)

  return (
    <div>
      <h1>Actors Page</h1>
      { renderActorList }
    </div>
  )
}

export default Actors;
