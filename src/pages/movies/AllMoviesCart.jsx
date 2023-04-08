import React from 'react'

//Link
import { Link } from "react-router-dom";

const AllMoviesCart = ({ data }) => {
  return (
    <Link to={`/movie/${data.id}`}>
      <div className="w-full"> 
        <img className="rounded-xl" alt="image" src={data.poster}/>
        <h3 className="text-slate-100 text-sm font-semibold py-2 text-center">
          {data.title}
        </h3>
      </div>
    </Link>
  )
}

export default AllMoviesCart