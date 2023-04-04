import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Autoplay , A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//Component
import MovieCart from './MovieCart';

const MostPopular = ({ endpoint }) => {

  return (
    <div className='flex item-center justify-center w-10/12'>
    <Swiper
    modules={[Autoplay , A11y]}
    spaceBetween={10}
    slidesPerView={6.1}
    centeredSlides= {true}
    loop={true}
    breakpoints={{
      0: {
        slidesPerView: 1.1,
        spaceBetween: 6
      },
      481:{
        slidesPerView: 3
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 6,
      }
    }}
    >
      {
        endpoint.map((popular , i) => (
          <SwiperSlide key={i}>
               <MovieCart key={i} endpoint={popular}/>       
          </SwiperSlide>
        ))
      }
      </Swiper>
    </div>
  )
}

export default MostPopular