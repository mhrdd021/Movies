import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//component
import CommentCart from "./commentCart/CommentCart";

//Images
import Avatar1 from '../../assets/avatar1.png'
import Avatar2 from '../../assets/avatar2.png'

const CommentBox = () => {
  const CommentsList = [
    {
      id: 1,
      name: "Aria",
      comment:
        "I think it was a very good movie with a nice ending Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi",
      hour: 9,
      value: 4,
      img: Avatar1
    },
    {
      id: 2,
      name: "Frank 102",
      comment:
        "Filming and sound recording were good, but I don't think the story was very interesting Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi",
      hour: 9,
      value: 3,
      img: Avatar1
    },
    {
      id: 3,
      name: "Setare saeidi",
      comment:
        "Is it worth seeing?????????? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi",
      hour: 9,
      value: 4,
      img: Avatar2
    },
    {
      id: 4,
      name: "mehrad",
      comment:
        "It was a beautiful movie and based on reality! With a little exaggeration Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi",
      hour: 9,
      value: 5,
      img: Avatar1
    },
    {
      id: 5,
      name: "raquel Nicolson",
      comment:
        "Anyone who wants to see a movie and the movie opens should first come and start from this, then go and see any movie he wants. It is the best since it was made until now.",
      hour: 9,
      value: 2,
      img: Avatar2
    },
  ];

  return (
    <div className="commentBoxContainer text-white w-10/12 h-auto mx-auto my-2  px-3">
      <Swiper
        slidesPerView={1.2}
        centeredSlides={true}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1.1 },
          600: { slidesPerView: 2 },
          1000: { slidesPerView: 3 },
        }}
      >
        {CommentsList.map((comment, i) => (
          <SwiperSlide key={i}>
            <CommentCart data={comment} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CommentBox;
