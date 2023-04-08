import React from "react";

//Link
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//Animation
import { motion } from "framer-motion";

// import required modules
import { EffectCards } from "swiper";

const Hero = ({ data }) => {
  return (
    <div className="flex items-center justify-center w-10/12 py-8">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        loop={true}
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full h-[600px] flex items-center justify-center bg-no-repeat bg-center bg-cover rounded-xl"
              style={{ backgroundImage: `url(${item.images[1]})` }}
            >
              <div className="backdrop-brightness-[0.60] h-screen w-full flex items-center justify-center">
                <div className="flex items-center justify-center w-full md:w-10/12 h-3/4 z-[200] flex-col-reverse md:flex-row ">
                  <div className="md:w-8/12 w-10/12">
                    <div className="p-full">
                      <motion.h1
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 1,
                          delay: 0.3,
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        className="text-slate-100 font-bold text-lg sm:text-2xl md:text-4xl text-center sm:text-left sm:mt-0.5 mt-4"
                      >
                        {item.title}
                      </motion.h1>

                      <motion.p
                        animate={{}}
                        className="text-slate-300 font-normal text-md w-full md:w-8/12 py-4 hidden sm:block"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua Egestas purus viverra accumsan in nisl nisi
                        Arcu cursus vitae congue mauris rhoncus aenean vel elit
                        scelerisque In egestas erat imperdiet sed euismod nisi
                        porta lorem mollis Morbi tristique senectus et netus
                      </motion.p>

                      <div className="flex items-center justify-center sm:mt-1 mt-4 sm:justify-start gap-8">
                        <Link to={`/movie/${item.id}`}>
                          <button
                            className="bg-red-600 border-2 text-slate-100 border-red-600 py-1 px-2 md:px-4 md:py-2 rounded-full text-sm md:text-md font-bold hover:scale-105 duration-300"
                            style={{
                              boxShadow: "0px 0px 10px 10px RGBA(255,0,0,0.25)",
                            }}
                          >
                            Watch Now
                          </button>
                        </Link>
                        <button
                          className="text-slate-100 border-2 bg-white/10 border-white py-1 px-2 md:px-4 md:py-2 rounded-full text-sm md:text-md font-bold hover:scale-105 duration-300"
                          style={{
                            boxShadow:
                              "0px 0px 10px 10px RGBA(255,255,255,0.15)",
                          }}
                        >
                          Watch Trailer
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex item-center justify-center w-10/12 sm:w-4/12">
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
