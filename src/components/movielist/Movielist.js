import React from "react";
import MovieCard from "../moviecard/moviecard";
import { Link } from "react-router-dom";
import "./Movielist.css"

const Movielist = ({ movieList, rate, search  }) => {
  return (
    <div className="movieContainer">
      {movieList.filter(
        (movie) =>
          movie.rating >= rate &&
          movie.name.toUpperCase().includes(search.toUpperCase())
      )
      .map((singleMovie) => (
      <Link
        to={{
          pathname: `/movie/${singleMovie.id}`,
          state: singleMovie,
        }}
      >
        <MovieCard
          posterUrl= {singleMovie.posterUrl} 
          movieTitle={singleMovie.name}
          description={singleMovie.description}
          rating={singleMovie.rating}
        />
      </Link>
      ))}
    </div>
  );
};

export default Movielist;
