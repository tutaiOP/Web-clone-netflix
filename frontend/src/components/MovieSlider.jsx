import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SMALL_URL_TMDB } from '../utils/constand';
import axiosInstance from '../lib/axios';

const MovieSlider = (item) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const res = await axiosInstance.get(`/movies/${item.item}`);
      setList(res.data.data.results);
    };
    getMovie();
  }, [item.item]);

  return (
    <>
      <div className="bg-black px-4 md:px-8 lg:px-13 py-4 cursor-pointer relative">
        <h3 className="text-white font-bold text-xl md:text-2xl mb-4 uppercase">{item.item}</h3>
        <div className="flex flex-col gap-2 h-auto">
          <Swiper
            modules={[FreeMode, Pagination]}
            spaceBetween={10}
            slidesPerView={2} // Mặc định hiển thị 2 slide
            freeMode={true}
            className="max-w-full h-auto !mx-0"
            breakpoints={{
              640: {
                slidesPerView: 2, // Hiển thị 2 slide trên màn hình nhỏ
              },
              768: {
                slidesPerView: 3, // Hiển thị 3 slide trên màn hình trung bình
              },
              1024: {
                slidesPerView: 5, // Hiển thị 5 slide trên màn hình lớn
              },
              1280: {
                slidesPerView: 6, // Hiển thị 6 slide trên màn hình rất lớn
              },
            }}
          >
            {list.map((service) => (
              <SwiperSlide key={service.id}>
                <Link to={`/watch/${service.id}`}>
                  <div className="flex flex-col gap-2 w-auto h-auto">
                    <img
                      src={SMALL_URL_TMDB + service.backdrop_path}
                      className="w-full h-[150px] md:h-[177px] object-cover rounded-lg hover:scale-105 transition duration-300"
                      alt={service.overview || "Movie Poster"}
                    />
                    <span className="text-white text-sm md:text-lg truncate">{service.original_title}</span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default MovieSlider;