import React from "react";

function MovieCard({ title, time, genres }) {
    const lists = genres.map(genre => <li key={genre}>{ genre }</li>)
    
    return(
        <div>
            <h2>{ title }</h2>
            <p>{ time }</p>
            <ul>
                {lists}
            </ul>
        </div>
    )
}

export default MovieCard