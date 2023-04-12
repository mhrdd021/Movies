import React, { useState } from "react";

//Icon
import { BiSearch } from "react-icons/bi";
import { FaCircleNotch } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

//Link
import { Link } from "react-router-dom";

const Header = () => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  function OpenHeader() {
    setIsHeaderOpen(true);
  }
  function CloseHeader() {
    setIsHeaderOpen(false);
  }
  return (
    <>
      <AiOutlineMenu
        className={` ${
          isHeaderOpen
            ? "hidden"
            : "w-6 h-6 text-slate-100 lg:hidden flex absolute top-0 right-0 m-2 z-[100]"
        }`}
        onClick={OpenHeader}
      />
      <div
        className={`bg-zinc-900 text-slate-100 flex-col h-screen fixed lg:flex items-center px-8 gap-6 shadow-l shadow-xl shadow-white/20
        ${isHeaderOpen ? "sm:w-1/3 w-1/2 z-[200] " : "w-2/12  hidden "}
      `}
      >
        <div className="relative top-0 right-0 left-0 py-8">
          <div className="flex items-center justify-center flex-col">
            <div className="flex item-center justify-center gap-2">
              <IoClose
                onClick={CloseHeader}
                className={` ${
                  isHeaderOpen
                    ? "w-6 h-6 text-white lg:hidden flex m-2 z-[100]"
                    : "hidden"
                }`}
              />
              <div className="flex item-center justify-center gap-2">
                <h1 className="text-2xl font-bold text-slate-200 flex">
                  ReactJs
                </h1>
                <span className="flex mt-2 text-md font-bold text-slate-500 uppercase">
                  mhrdd
                </span>
              </div>
            </div>
            <div className="flex item-center justify-center relative mt-4">
              <BiSearch className="absolute top-1/4 left-1 box-border w-6 h-6 text-zinc-400" />
              <input
                className="w-full rounded-lg bbox-border border-none outline-none py-1.5 pl-7 text-zinc-700"
                placeholder="Search"
              ></input>
            </div>
          </div>

          <div className="mt-8">
            <div
              className="flex-col text-left gap-10 text-lg font-semibold"
              style={{ direction: "rtl" }}
            >
              <Link to={"/"}>
                <h1 className="block">Home Page</h1>
              </Link>

              <Link to={"/movies"}>
                <h1 className="block">Movies</h1>
              </Link>
              <ul className="flex flex-col text-slate-300 font-normal text-sm pl-4 gap-2 my-1.2">
                <div className="flex items-center justify-end gap-1">
                  <li>Top 250</li>
                  <FaCircleNotch className="text-xs text-red-500" />
                </div>
                <div className="flex items-center justify-end gap-1">
                  <li>Popular</li>
                  <FaCircleNotch className="text-xs text-red-500" />
                </div>
                <div className="flex items-center justify-end gap-1">
                  <li>Newest</li>
                  <FaCircleNotch className="text-xs text-red-500" />
                </div>
              </ul>
              <h1 className="block">Tv Series</h1>
              <ul className="flex flex-col text-slate-300 font-normal text-sm pl-4 gap-2 my-1.2">
                <div className="flex items-center justify-end gap-1">
                  <li>Top 250</li>
                  <FaCircleNotch className="text-xs text-red-500" />
                </div>
                <div className="flex items-center justify-end gap-1">
                  <li>Popular</li>
                  <FaCircleNotch className="text-xs text-red-500" />
                </div>
                <div className="flex items-center justify-end gap-1">
                  <li>Newest</li>
                  <FaCircleNotch className="text-xs text-red-500" />
                </div>
              </ul>
              <Link to={"/categories"}>
                <h1 className="block">Categories</h1>
              </Link>
              <Link to={"AboutUs"}>
                <h1 className="block">About Us</h1>
              </Link>
              <Link to={"/SignUp"}>
                <h1 className="block">Sign Up</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
