import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen -mt-14 aspect-video pt-[25%] px-10 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/2 py-6 text-lg ">{overview}</p>
      <div>
        <button className="bg-white hover:bg-opacity-80 rounded-lg p-4 text-xl text-black px-12 mx-2">
          ▶️ Play
        </button>
        <button className="bg-gray-700 bg-opacity-50 rounded-lg p-4 text-xl text-white px-12">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
