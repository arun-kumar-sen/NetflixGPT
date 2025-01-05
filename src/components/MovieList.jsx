import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
  return (
    <div className="px-4 text-white">
      <h1 className=" text-3xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex over">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
