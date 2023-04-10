import React from "react";

//Images
import Logo from "../../assets/logo.png";

//Link
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-2/12 flex-col bg-zinc-900 h-screen fixed hidden lg:flex items-center px-8 z-20 text-slate-100 gap-6 shadow-l shadow-xl shadow-white/20">
      <div className="relative top-0 right-0 left-0 py-8">
        <div className="flex items-center justify-center">
          <img src={Logo} className="w-16 h-auto" alt="" />
          <span className="font-bold text-2xl">Movie Site</span>
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
            <ul className="flex-col text-slate-300 font-normal text-sm pl-4 gap-2 my-1.2">
              <li>Top 250</li>
              <li>Popular</li>
              <li>Newest</li>
            </ul>
            <h1 className="block">Tv Series</h1>
            <ul className="flex-col text-slate-300 font-normal text-sm pl-4 gap-2 my-1.2">
              <li>Top 250</li>
              <li>Popular</li>
              <li>Newest</li>
            </ul>
            <Link to={"/categories"}>
              <h1 className="block">Categories</h1>
            </Link>
            <Link to={'AboutUs'}>
              <h1 className="block">About Us</h1>
            </Link>
            <Link to={"/SignUp"}>
              <h1 className="block">Sign Up</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
