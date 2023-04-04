import React from "react";

//Images
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="w-2/12  flex-col bg-gray-800 h-screen fixed hidden lg:flex items-center justify-around px-8 z-20 text-slate-100">
      <div className="flex items-center justify-center">
        <img src={Logo} className="w-16 h-auto" alt="" />
        <span className="font-bold text-2xl">Movie Site</span>
      </div>

      <div>
        <ul
          className="flex items-center justify-center gap-4 text-lg font-semibold"
          style={{ direction: "rtl" }}
        >
          <li>Home Page</li>
          <li>Movies</li>
          <li>Tv Series</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
