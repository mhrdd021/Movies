import React, { useEffect, useState } from "react";

//component
import Hero from "../components/hero/Hero";
import Most from "../components/most/Most";
import Loader from "../loader/Loader";

//Axios
import axios from "axios";

const Home = () => {
  //push page to top
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Homepage";
  }, []);

  //Loader
  const [loading, setLoading] = useState(false);

  //HomePage Movies Data
  const [slides, setSlides] = useState([]);
  const [mostPopular, setMostPopular] = useState([]);
  const [mostView, setMostView] = useState([]);
  const [mostNew, setMostNew] = useState([]);

  const MostData = [mostPopular, mostView, mostNew];

  useEffect(() => {
    async function FetchApi() {
      // the Loading page will show.
      setLoading(true);

      const res = await axios.get(`https://moviesapi.ir/api/v1/movies?page=1`);
      const res2 = await axios.get(`https://moviesapi.ir/api/v1/movies?page=8`);
      const res3 = await axios.get(
        `https://moviesapi.ir/api/v1/movies?page=19`
      );
      setSlides(res.data.data.slice(6, 11));
      setMostPopular(res.data.data.slice(0, 10));
      setMostView(res2.data.data.slice(0, 10));
      setMostNew(res3.data.data.slice(0, 10));

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
        <div className="flex items-center justify-center flex-col  h-auto z-10">
          <Hero data={slides} />
          <Most data={MostData} />
        </div>
      )}
    </>
  );
};

export default Home;
