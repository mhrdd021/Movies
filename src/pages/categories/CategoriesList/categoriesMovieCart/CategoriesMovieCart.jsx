import React from "react";

//Icons
import { TbWorld } from "react-icons/tb";
import { IoCalendarNumber } from "react-icons/io5";
import { FaTheaterMasks } from "react-icons/fa";

//Link
import { Link } from "react-router-dom";

const CategoriesMovieCart = ({ data }) => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center w-10/12 md:w-8/12 rounded-xl  my-8 md:pb-2 pb-4 movie_card px-4"
      style={{ background: "linear-gradient(45deg, #000000, #2f2f2f)" }}
    >
      <div className="flex items-center justify-center w-10/12 md:w-4/12 image_container py-4 md:px-4">
        <img
          src={data.poster}
          className="h-auto w-full shadow-lg shadow-white/10"
          style={{ borderRadius: "1rem" }}
          alt="movie"
        ></img>
      </div>

      <div className="w-full md:w-8/12 px-4 md:py-8 py-2">
        <div className="flex justify-between imdb_name_container pr-4 md:pr-1">
          <div>
            <h1 className="md:text-2xl sm:text-lg text-md font-bold text-slate-100">{data.title}</h1>
            <hr
              className="my-4 md:w-12/12 red w-8/12"
              style={{ borderColor: "#ff3f34" }}
            ></hr>
          </div>

          <div className="px-4 imdb_rating">
            <h1 className="text-center">
              <span className="font-bold text-yellow-500">
                {data.imdb_rating}
              </span>
              <span className="text-zinc-400">/10</span>
            </h1>
            <hr className="w-8/12 mb-2 mt-1 mx-auto "></hr>
            <h2 className="py-1 px-4 rounded-md bg-yellow-500 text-white mx-auto font-bold">
              IMDB
            </h2>
          </div>
        </div>

        <h2 className="text-sm flex my-4 text-slate-200">
          quality : 1080p WEB-DL Full HD
        </h2>
        <h2 className="text-sm flex my-4 pr-4 md:pr-1 text-slate-200">
          {" "}
          <FaTheaterMasks className="text-red-600 text-lg mx-2" />
          genre: {data.genres + ""}
        </h2>
        <h2 className="text-sm flex my-4 pr-4 md:pr-1 text-slate-200">
          {" "}
          <IoCalendarNumber className="text-red-600 text-lg mx-2" /> year:{" "}
          {data.year}
        </h2>
        <h2 className="text-sm flex my-4 pr-4 md:pr-1 text-slate-200">
          {" "}
          <TbWorld className="text-red-600 text-lg mx-2" />
          made by: {data.country}
        </h2>

        <p className="text-sm text-zinc-400  px-2 text-left">
          <span className="font-bold">Overview:</span>
          <br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
          purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque
        </p>

        <Link to={`/movie/${data.id}`}>
          <button className="md:float-right bg-red-600 border-2 my-1 text-slate-100 border-red-600 py-0.5 px-1 md:px-4 md:py-2 rounded-full text-sm md:text-md font-bold hover:scale-105 duration-300" value={data.id}>
            <span className="text">Watch Now</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoriesMovieCart;
