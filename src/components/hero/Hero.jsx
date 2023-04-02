import React, { useEffect, useState } from "react";

//Axios
import axios from "axios";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//Animation
import { motion } from "framer-motion";

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
                      <motion.h1
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 1,
                          delay: 0.3,
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        className="text-slate-100 font-bold text-4xl"
                      >
                        {item.title}
                      </motion.h1>

                      <motion.p
                        animate={{}}
                        className="text-slate-300 font-normal text-md w-8/12 py-4"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua Egestas purus viverra accumsan in nisl nisi
                        Arcu cursus vitae congue mauris rhoncus aenean vel elit
                        scelerisque In egestas erat imperdiet sed euismod nisi
                        porta lorem mollis Morbi tristique senectus et netus
                      </motion.p>

                      <div className="flex items-center justify-start gap-8">
                        <button
                          className="bg-red-600 border-2 text-slate-100 border-red-600 px-4 py-2 rounded-full text-md font-bold hover:scale-105 duration-300"
                          style={{
                            boxShadow: "0px 0px 10px 10px RGBA(255,0,0,0.25)",
                          }}
                        >
                          Watch Now
                        </button>
                        <button
                          className="text-slate-100 border-2 bg-white/10 border-white px-4 py-2 rounded-full text-md font-bold hover:scale-105 duration-300"
                          style={{
                            boxShadow: "0px 0px 10px 10px RGBA(255,255,255,0.15)",
                          }}
                        >
                          Watch Trailer
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="w-4/12">
                    <motion.img
                      initial={{ scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 90,
                        damping: 20,
                      }}
                      src={item.poster}
                      className="rounded-lg w-3/4 h-auto"
                      style={{
                        boxShadow: "0px 0px 20px 15px RGBA(255,0,0,0.15)",
                      }}
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
