import React from "react";

//Link
import { Link } from "react-router-dom";

const MovieCart = ({ endpoint }) => {

  return (
    <Link to={`/movie/${endpoint.id}`}>
      <div className="w-full"> 
        <img className="rounded-xl" alt="image" src={endpoint.poster}/>
        <h3 className="text-slate-100 text-sm font-semibold py-2 text-center">
          {endpoint.title}
        </h3>
      </div>
    </Link>
  );
};

export default MovieCart;
