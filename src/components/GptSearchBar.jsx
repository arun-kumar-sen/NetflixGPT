import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store?.config?.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);

  // search movie in TMDB
  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // call gpt search api and get movie result
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      ".only give me names of 5 movies, comma separated like the example result given head. Example result :Gadar,Sholay,Koi mil gaya,RRR,Bahubali";
    const gptResults = [];
    // await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    if (!gptResults.choices) {
      // TODO: Write Error Handling
    }
    console.log(gptResults.choices?.[0].message.content);
    // Andaz apna apna , Hera Pheri",chupke chupke,padosan,Jane bhi do yaaro,
    const gptMovieList = gptResults.choices?.[0].message.content.split(",") || [
      "Andaz apna apna",
      "Hera Pheri",
      "chupke chupke",
      "padosan",
      "Jane bhi do yaaro",
    ];
    console.log(gptMovieList);
    // For each movie I will search TMDB API
    const promiseArray = gptMovieList?.map((movie) => searchMovieTmdb(movie));
    //promiseArray =  [Promise,Promise,Promise,Promise,Promise]
    // as searchMovieTmdb is async so it will return 5 promises not results

    const tmdbResults = await Promise.all(promiseArray);
    // Promise.all takes array of promises
    console.log(tmdbResults);
    dispatch(
      addGptMoviesResult({
        movieNames: gptMovieList,
        movieResults: tmdbResults,
      })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black w-1/2 grid grid-cols-12"
      >
        <input
          className="p-3 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
          type="search"
          ref={searchText}
        />
        <button
          onClick={handleGptSearchClick}
          className="col-span-3 m-4  px-2 bg-red-700 text-white rounded-lg"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
