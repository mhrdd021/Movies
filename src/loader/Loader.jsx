import React from "react";

//Image
import LoaderGif from "./loader.svg";

const Loader = () => {
  return (
    <div className="loader w-full h-screen flex items-center justify-center">
      <img src={LoaderGif} alt="loader"></img>
    </div>
  );
};

export default Loader;
