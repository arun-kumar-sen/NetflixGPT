import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-2">
      <img src={IMAGE_CDN_URL + posterPath} alt="MovieCard" />
    </div>
  );
};

export default MovieCard;
