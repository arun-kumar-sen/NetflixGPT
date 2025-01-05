import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  // Movilists 0f 1-> Popular 2->Trending 3->nowPlaying etc
  return (
    <div className=" bg-black">
      <div className="relative z-20 pl-8 -mt-10">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.addPopularMovies} />
        <MovieList title={"Top Rated"} movies={movies?.addTopRatedMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
