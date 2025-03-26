import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import BoxImage from '../components/BoxImage'
import Footer from '../components/Footer'
import { useContent } from '../store/useContent'

const LatestPage = () => {
    const listPoUp = [
        "popular",
        "upcoming"
    ]
    const [newList, setNewList] = useState([]);
    const { getMovieByGenre, movieList } = useContent();

    useEffect(() => {
        listPoUp.map((item) => {
            getMovieByGenre(item);
            setNewList([...newList, movieList]);

        })
    }, [])
    console.log("Movie list", movieList);
    console.log("New list", newList);
    return (
        <div>
            <Header />
            <BoxImage />

            <div className='bg-black h-full px-13'>

                <div className='pt-[250px] text-white'>
                    <div className='grid grid-cols-5 gap-x-2 gap-y-20'>

                        {movieList.map((movie, index) => (
                            <div key={index}>
                                <img
                                    className='w-full h-[177px] object-cover rounded-lg hover:scale-105 transition duration-300'
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // Hiển thị ảnh từ API
                                    alt={movie.title || "Movie Poster"}
                                />
                                <p className='text-white text-xl truncate'>{movie.title}</p>
                            </div>
                        ))}


                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default LatestPage
