import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from "swiper/modules";
import HoverSlider from './HoverSlider'
import { RxArrowTopRight } from "react-icons/rx";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useContent } from '../store/useContent';
import { SMALL_URL_TMDB } from '../utils/constand';




const MovieSlider = (item) => {
  console.log("Check item", item);
  const [isHoveredBox, setIsHoveredBox] = useState(false)
  console.log("Check item item", item.item)
  const { getMovieByCategory, movieList } = useContent();

  useEffect(() => {
    getMovieByCategory(item.item);
  }, []);

  console.log("Check movieList", movieList)
  return (
    <>
      <div className="bg-black px-6 py-4 cursor-pointer relative">
        {isHoveredBox && (
          <HoverSlider />
        )}

        <h3 className="text-white font-bold text-2xl mb-4 uppercase">{item.item}</h3>
        <div className="flex flex-col gap-2 h-auto">
          <Swiper
            modules={[FreeMode, Pagination]}
            spaceBetween={10}
            slidesPerView={6}
            freeMode={true}
            className="max-w-full h-[400px] !mx-0" // Sửa max-w
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

            {movieList.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="flex flex-col gap-2 w-auto h-auto">
                  <img
                    src={SMALL_URL_TMDB + service.backdrop_path}
                    className="w-full h-[177px] object-cover rounded-lg"
                    alt={service.overview} // Sử dụng nội dung cho alt
                    onMouseEnter={() => setIsHoveredBox(true)}
                    onMouseLeave={() => setIsHoveredBox(false)}
                  />
                  <span className="text-white text-xl truncate">{service.original_title}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div >

    </>



  );
};

export default MovieSlider
