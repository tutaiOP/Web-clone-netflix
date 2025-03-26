import React from 'react'
import { useContent } from '../store/useContent'
import { SMALL_URL_TMDB } from '../utils/constand';

const SearchMovie = () => {
    const { search } = useContent();
    console.log("Search", search);
    return (
        <div className='bg-black h-full px-13'>

            <div className='pt-[250px] text-white'>
                <div className='grid grid-cols-6 gap-x-2 gap-y-20'>
                    {search.map((value, index) => (
                        <div key={index} >
                            <img className='w-full h-[177px] object-cover rounded-lg hover:scale-105 transition duration-300' src={SMALL_URL_TMDB + value.backdrop_path} alt="" />
                            <p className='text-white text-xl truncate'>{value.title}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default SearchMovie
