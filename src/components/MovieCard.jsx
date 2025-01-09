import React, { useState } from "react";
import { API_OPTIONS, IMAGE_CDN_URL } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const MovieCard = ({ posterPath, movieId }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    getMovieVideos();
  };
  const closeModal = () => setIsModalOpen(false);

  const trailerKey = useSelector((store) => store.movies?.trailerVideo?.key);
  // fetch trailer video
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    // find out the trailer
    const filterData = json.results.filter(
      (result) => result.type === "Trailer"
    );
    const trailer = filterData?.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  if (!posterPath) return null;
  return (
    <div className="w-48 pr-2">
      <img
        onClick={openModal}
        src={IMAGE_CDN_URL + posterPath}
        alt="MovieCard"
      />

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-4/5 max-w-md p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Modal Content
            </h2>
            <div className="mt-4">
              <iframe
                className="w-full h-64 md:h-80 rounded-lg"
                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                frameBorder="0"
              ></iframe>
            </div>
            <button
              onClick={closeModal}
              className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
