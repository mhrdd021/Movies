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

      setAllMovies((a) => [...allMovies, res.data.data]);

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
        <div className="flex item-center justify-center">
          <div className="flex item-center justify-center flex-col w-10/12 min-h-screen">
            <ul className="grid grid-cols-6 gap-3">
              {allMovies.map((arr, i) =>
                arr.map((arrItem, i) => (
                  <li className="">
                    <AllMoviesCart data={arrItem} key={i} />
                  </li>
                ))
              )}
            </ul>

            <button
              onClick={LoadMore}
              className="bg-blue-300 py-2 px-4 rounded-lg m-5"
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
