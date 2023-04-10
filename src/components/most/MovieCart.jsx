import React, { useState } from "react";

//Link
import { Link } from "react-router-dom";

//Icons
import { FaPlay } from "react-icons/fa";

const MovieCart = ({ endpoint }) => {
  const [isHover, setIsHover] = useState(false);

  function CartHover() {
    setIsHover(true);
  }
  function CartHoverOut() {
    setIsHover(false);
  }
  return (
    <Link to={`/movie/${endpoint.id}`}>
      <div
        className="w-full flex items-center justify-center flex-col"
        onMouseOver={CartHover}
        onMouseOut={CartHoverOut}
      >
        <div className="w-full flex items-center justify-center flex-col">
          <img
            className={`rounded-xl ${
              isHover ? "brightness-50" : "brightness-100"
            }`}
            alt="movie-cart"
            src={endpoint.poster}
          />
          <div
            className={`${
              isHover
                ? "text-white absolute w-8 h-8 bg-red-600 shadow-md shadow-red-600 rounded-full p-2 hover:scale-105 active:scale-95 duration-300"
                : "hidden"
            }`}
          >
            <FaPlay className="text-md " />
          </div>
        </div>
        <h3 className="text-slate-100 text-sm font-semibold py-2 text-center">
          {endpoint.title}
        </h3>
      </div>
    </Link>
  );
};

export default MovieCart;
