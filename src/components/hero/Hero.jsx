import React, { useEffect, useState } from "react";

//Axios
import axios from "axios";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Hero = ({ Api }) => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    async function FetchApi() {
      const res = await axios.get(`${Api.BaseURL}?page=1`);
      setSlides(res.data.data.slice(6, 11));
    }
    FetchApi();
  }, []);

  return (
    <div className="w-full h-screen">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        className=" backdrop-brightness-50 "
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full h-screen flex items-center justify-center bg-no-repeat bg-center bg-cover "
              style={{ backgroundImage: `url(${item.images[1]})` }}
            >
              <div className=" backdrop-brightness-[0.60] h-screen w-full flex items-center justify-center">
                <div className="flex items-center justify-center w-10/12 h-3/4 z-[200]">
                  <div className="w-8/12">
                    <div className="p-12 ">
                      <h1 className="text-slate-100 font-bold text-3xl">
                        {item.title}
                      </h1>
                      <p className="text-slate-300 font-normal text-md w-8/12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua Egestas purus viverra accumsan in nisl nisi
                        Arcu cursus vitae congue mauris rhoncus aenean vel elit
                        scelerisque In egestas erat imperdiet sed euismod nisi
                        porta lorem mollis Morbi tristique senectus et netus
                      </p>
                    </div>
                  </div>

                  <div className="w-4/12">
                    <img
                      src={item.poster}
                      className="rounded-lg w-3/4 h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
