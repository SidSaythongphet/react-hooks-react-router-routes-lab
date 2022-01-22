import React from "react";

function DirectorCard({ name, movies }) {
    const lists = movies.map((movie, i) => <li key={i}>{ movie }</li>)
    
    return(
        <div>
            <h2>{ name }</h2>
            <ul>
                {lists}
            </ul>
        </div>
    )
}

export default DirectorCard