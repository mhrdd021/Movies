import React, { useState, useEffect } from "react";

//Loader
import Loader from "../../loader/Loader";

//Axios
import axios from "axios";

//component
import AllMoviesCart from "./AllMoviesCart";

const Movies = () => {
  //push page to top
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Homepage";
  }, []);

  //Loader
  const [loading, setLoading] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  var [pageNumber, setPageNumber] = useState(1);

  function LoadMore() {
    setPageNumber(pageNumber + 1);
  }

  useEffect(() => {
    async function FetchApi() {
      // the Loading page will show.
      setLoading(true);

      const res = await axios.get(
        `https://moviesapi.ir/api/v1/movies?page=${pageNumber}`
      );

      setAllMovies( a => [...allMovies, res.data.data]);

      // Closed the loading page
      setLoading(false);
    }

    FetchApi();
  }, [pageNumber]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex item-center justify-center py-6">
          <div className="flex item-center justify-center flex-col w-10/12 min-h-screen">
            <ul className="grid md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-3">
              {allMovies.map((arr, i) =>
                arr.map((arrItem, i) => (
                  <li key={i}>
                    <AllMoviesCart
                      data={arrItem}
                      key={i}
                    />
                  </li>
                ))
              )}
            </ul>

            <button
              onClick={LoadMore}
              className="mx-auto w-fit text-slate-100 shadow-md shadow-red-600 ease-in-out cursor-pointer hover:scale-105 active:scale-95 duration-300 bg-red-600 py-2 px-4 rounded-full m-5"
            >
              load more
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Movies;
