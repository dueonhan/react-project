import React, {Component} from 'react';
import MovieInfo from "./MovieInfo";
import "./MovieInfo.css";

function Movie({title, poster  , date_uploaded }){
    //console.log("date_uploaded:"+date_uploaded)

    const MovieStyle = {
        width: '1280px',
        margin : '0 auto'
    }

    return (
        <>
        <div style={MovieStyle} >
            <MovieInfo  title={title} imgURL={poster} openDate={date_uploaded} />
        </div>
        </>
    )
}


export default Movie;