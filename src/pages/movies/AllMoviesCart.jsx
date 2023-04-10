import React, { useState } from "react";

//Link
import { Link } from "react-router-dom";

const AllMoviesCart = ({ data }) => {
  const [isHover, setIsHover] = useState(false);

  function CartHover() {
    setIsHover(true);
  }
  function CartHoverOut() {
    setIsHover(false);
  }

  return (
    <Link to={`/movie/${data.id}`}>
      <div
        className="w-full h-72 md:h-64 bg-cover bg-no-repeat bg-center rounded-lg"
        style={{ backgroundImage: `url(${data.poster})` }}
        onMouseOver={CartHover}
        onMouseOut={CartHoverOut}
      >
        <div
          onMouseOver={CartHover}
          onMouseOut={CartHoverOut}
          className={`flex item-center justify-center backdrop-brightness-[0.35] w-full h-full rounded-lg ${
            isHover ? "flex" : "hidden"
          }`}
        >
          <div className="flex flex-col item-center justify-center text-slate-100 px-1.5">
            <h1 className="text-md font-bold">{data.title}</h1>
            <h3>
              Imdb : <span className="">{data.imdb_rating}</span>
            </h3>
            <h3>Country : {data.country}</h3>
            <h3>Year : {data.year}</h3>
            <button className="flex item-center justify-center mx-auto w-fit py-1 px-2 rounded-full bg-red-600 text-slate-100 text-sm font-bold my-2 shadow-md shadow-red-600 hover:scale-105 active:scale-95 duration-300">
              Watch Now
            </button>
          </div>
        </div>
      </div>
      <h3 className="flex item-center justify-center text-slate-100 text-sm font-semibold py-2 text-center">
        {data.title}
      </h3>
    </Link>
  );
};

export default AllMoviesCart;
