import React from "react";

//Link
import { Link } from "react-router-dom";

const CategoriesList = ({ CategoriesData }) => {
  return (
    <Link to={`/category/${CategoriesData.CategoryId}`}>
      <div
        className="h-36 bg-center bg-cover bg-no-repeat  hover:scale-105 duration-300 active:scale-95 rounded-lg hover:shadow-xl hover:shadow-white/5"
        style={{ backgroundImage: `url(${CategoriesData.image})` }}
      >
        <div className="w-full h-full hover:backdrop-brightness-75 backdrop-brightness-50 flex items-center justify-center">
          <h1 className="flex item-center justify-center text-2xl font-bold text-slate-100">
            {CategoriesData.title}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default CategoriesList;
