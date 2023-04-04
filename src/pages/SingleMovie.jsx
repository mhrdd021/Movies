import React, { useEffect, useState } from "react";

//axios
import axios from "axios";

//Image
import BGpic from "../assets/bg.jpg";

//Icons
import { TbWorld } from "react-icons/tb";
import { IoCalendarNumber } from "react-icons/io5";
import { FaTheaterMasks } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import CommentBox from "../components/comments/CommentBox";

const SingleMovie = ({ Api }) => {
  const [singleMovie, setSingleMovie] = useState([]);

  const MovieId = window.location.pathname.split("/").pop();

  useEffect(() => {
    async function FetchApi() {
      const res = await axios.get(`${Api.BaseURL}/${MovieId}`);
      setSingleMovie(res.data);
    }
    FetchApi();
  }, []);

  if (singleMovie.images) {
    var bg = `url(${singleMovie.images[1]})`;
  } else {
    var bg = `url(${BGpic})`;
  }

  return (
    <>
    <div
      className="flex item-center justify-center w-full h-screen bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: bg }}
    >
      <div className="flex item-center justify-center w-full h-screen backdrop-brightness-50">
        <div className="flex items-center justify-evenly w-10/12">
          <div className="w-4/12 image_container_movie">
            <img
              src={singleMovie.poster}
              className="h-auto rounded-xl shadow-white/50 shadow-lg"
            ></img>
          </div>

          <div className="w-6/12  text_container">
            <div className="flex justify-between imdb_name_container">
              <div>
                <h1 className="text-3xl text-white font-bold">
                  {singleMovie.title}
                </h1>
                <hr
                  className="my-4 w-12/12 red"
                  style={{ borderColor: "#ff3f34" }}
                ></hr>
              </div>

              <div className="px-4 imdb_rating">
                <h1 className="text-center">
                  <span className="font-bold text-yellow-500">
                    {singleMovie.imdb_rating}
                  </span>
                  <span className="text-zinc-400">/10</span>
                </h1>
                <hr className="w-8/12 mb-2 mt-1 mx-auto "></hr>
                <h2 className="py-1 px-4 rounded-md bg-yellow-500 text-white mx-auto font-bold">
                  IMDB
                </h2>
              </div>
            </div>

            <div className="flex-col items-center justify-center">
              <h2 className="text-lg text-slate-100 flex items-center my-4">
                Quality : 1080p WEB-DL Full HD
              </h2>

              <h2 className="text-lg text-slate-100 flex items-center my-4">
                {" "}
                <IoCalendarNumber className="red text-lg mx-2" /> year:{" "}
                {singleMovie.year}
              </h2>
              <h2 className="text-lg text-slate-100 flex items-center my-4">
                {" "}
                <TbWorld className="red text-lg mx-2" />
                made by: {singleMovie.country}
              </h2>
              <h2 className="text-lg text-slate-100 flex items-center my-4">
                {" "}
                <BsFillPersonFill className="red text-lg mx-2" />
                director: {singleMovie.director}
              </h2>
              <h2 className="text-lg text-slate-100 flex items-center my-4">
                {" "}
                <FaTheaterMasks className="red text-lg mx-2" />
                genre:
                <div className="bg-zinc-800 px-2 py-1 rounded-md mx-2 text-sm">
                  {singleMovie.genres}
                </div>
              </h2>

              <p className="text-md text-zinc-400 mt-4">
                Overview:<br></br>
                {singleMovie.plot}
              </p>
            </div>

            <div className="flex justify-between">
              <div className="mt-8">
                <div className="flex">
                  <AiFillStar className="text-yellow-500 text-lg" />
                  <AiFillStar className="text-yellow-500 text-lg" />
                  <AiFillStar className="text-yellow-500 text-lg" />
                  <AiFillStar className="text-yellow-500 text-lg" />
                  <AiOutlineStar className="text-yellow-500 text-lg" />
                </div>
                <h1 className="text-slate-100">
                  from {singleMovie.imdb_votes} votes
                </h1>
              </div>

              <div className="mt-8 mb-4 flex item-center justify-center text-slate-100 gap-2">
                <div className="flex items-center justify-center bg-green-500 rounded-lg w-fit py-2 px-2 text-slate-100">
                  {singleMovie.metascore}
                </div>
                <span className="flex items-center justify-center">
                  Reviewer votes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <CommentBox />
    </>
  );
};

export default SingleMovie;
