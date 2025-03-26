import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";

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
    }
    getMovie();
  }, []);
  console.log("List", list);
  return (
    <>
      <div className="bg-black px-13 py-4 cursor-pointer relative">

        <h3 className="text-white font-bold text-2xl mb-4 uppercase">{item.item}</h3>
        <div className="flex flex-col gap-2 h-auto">
          <Swiper
            modules={[FreeMode, Pagination]}
            spaceBetween={10}
            slidesPerView={6}
            freeMode={true}
            className="max-w-full h-auto !mx-0" // Sửa max-w
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 5,
              },
              2048: {
                slidesPerView: 5,
              }
            }}
          >

            {list.map((service) => (
              <SwiperSlide key={service.id}>
                <Link to={`/watch/${service.id}`}>
                  <div className="flex flex-col gap-2 w-auto h-auto"  >
                    <img
                      src={SMALL_URL_TMDB + service.backdrop_path}
                      className="w-full h-[177px] object-cover rounded-lg hover:scale-105 transition duration-300"
                      alt={service.overview} // Sử dụng nội dung cho alt
                    />
                    <span className="text-white text-xl truncate">{service.original_title}</span>
                  </div>
                </Link>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div >

    </>



  );
};

export default MovieSlider
