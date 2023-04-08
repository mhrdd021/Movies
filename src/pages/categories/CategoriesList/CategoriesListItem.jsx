import React, { useState, useEffect } from "react";

//Axios
import axios from "axios";
import CategoriesMovieCart from "./categoriesMovieCart/CategoriesMovieCart";

//Components
import Loader from '../../../loader/Loader'

const CategoriesListItem = () => {
  //push page to top
  useEffect(() => {
  window.scrollTo(0, 0);
  document.title = "categories";
  }, []);


  const [CategoryMovie, setCategoryMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function FetchApi() {
      
      const MovieId = window.location.pathname.split("/").pop();
      
      // the Loading page will show.
      setLoading(true);

      const res = await axios.get(
        `https://moviesapi.ir/api/v1/genres/${MovieId}/movies?page=1`
      );
      setCategoryMovie(res.data.data);

      // Closed the loading page
      setLoading(false);
    }
    FetchApi();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex items-center justify-center flex-col">
          {CategoryMovie.map((MovieCategory, i) => (
            <CategoriesMovieCart key={i} data={MovieCategory} />
          ))}
        </div>
      )}
    </>
  );
};

export default CategoriesListItem;
