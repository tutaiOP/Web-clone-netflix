import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MovieSlider = () => {
    const ServiceData = [
      {
        id: "1",
        content: "One piece",
        backgroundImage: "one-piece.jpg",
      },
      {
        id: "2",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        backgroundImage: "phi-vu-trieu-do.webp",
      },
      {
        id: "3",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        backgroundImage: "one-piece.jpg",
      },
      {
        id: "4",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        backgroundImage: "one-piece.jpg",
      },
      {
        id: "5",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 123",
        backgroundImage: "one-piece.jpg",
      },
      {
        id: "6",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        backgroundImage: "one-piece.jpg",
      },
      {
        id: "7",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        backgroundImage: "one-piece.jpg",
      },
      {
        id: "8",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        backgroundImage: "one-piece.jpg",
      },
      {
        id: "9",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        backgroundImage: "one-piece.jpg",
      },
      {
        id: "10",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 123",
        backgroundImage: "one-piece.jpg",
      },
      {
        id: "11",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        backgroundImage: "one-piece.jpg",
      },
      {
        id: "12",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        backgroundImage: "one-piece.jpg",
      },
    ];
  
    return (
        <>
        <div className="bg-black px-6 py-4">
        <h3 className="text-white font-bold text-2xl mb-4">Top 10 bộ phim hay Việt Nam</h3>
        <div className="flex flex-col gap-2 h-[auto]">
          <Swiper
            modules={[FreeMode, Pagination]}
            spaceBetween={10}
            slidesPerView={6} // Set default slidesPerView
            freeMode={true}
         
            className="max-w[100%]  !mx-0"
            breakpoints={{
              640: {
                slidesPerView: 1,
              
              },
              768: {
                slidesPerView: 5, // Slide 3 at 768px width
               
              },
              1024: {
                slidesPerView: 5, // Slide 4 at 1024px width
               
              },
              2048: {
                slidesPerView: 5, // Slide 5 at 2048px width
               
                }
            }}
          >
            {ServiceData.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="flex flex-col gap-2 w-auto h-auto">
                  <img
                    src={service.backgroundImage}
                    className="w-full h-[177px] object-cover rounded-lg"
                    alt="One Piece"
                  />
                  <span className="text-white text-xl truncate ">{service.content}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="bg-black px-6 py-4">
        <h3 className="text-white font-bold text-2xl mb-4">Top 10 bộ phim hay Việt Nam</h3>
        <div className="flex flex-col gap-2 h-[auto]">
          <Swiper
            modules={[FreeMode, Pagination]}
            spaceBetween={10}
            slidesPerView={6} // Set default slidesPerView
            freeMode={true}
            pagination={{ clickable: true }}
            className="max-w[100%]  !mx-0"
            breakpoints={{
              640: {
                slidesPerView: 1,
              
              },
              768: {
                slidesPerView: 5, // Slide 3 at 768px width
               
              },
              1024: {
                slidesPerView: 5, // Slide 4 at 1024px width
               
              },
              2048: {
                slidesPerView: 5, // Slide 5 at 2048px width
               
                }
            }}
          >
            {ServiceData.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="flex flex-col gap-2 w-auto h-auto">
                  <img
                    src={service.backgroundImage}
                    className="w-full h-[177px] object-cover rounded-lg"
                    alt="One Piece"
                  />
                  <span className="text-white text-xl truncate">{service.content}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
        </>
      

      
    );
  };

export default MovieSlider
