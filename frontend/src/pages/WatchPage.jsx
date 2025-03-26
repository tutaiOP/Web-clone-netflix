import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { useContent } from '../store/useContent'
import { formatDateVN, ORIGINAL_IMG_TMDB } from '../utils/constand'

const WatchPage = () => {
    const searchParams = useParams("id");
    const id = searchParams.id;

    const { getTrending, content, getTrailer, movieId } = useContent();
    const [videoDetails, setVideoDetails] = useState(null);
    console.log("SearchParam", searchParams);
    console.log("Id", id);
    useEffect(() => {
        getTrailer(id);
    }, [getTrailer, id]);

    console.log("Get trailer videoId", movieId);

    useEffect(() => {
        const fetchTrending = async () => {
            await getTrending(); // Gọi API để lấy danh sách video
        };
        fetchTrending();
    }, [getTrending]);

    useEffect(() => {
        if (content?.data && content.data.id === parseInt(id)) {
            setVideoDetails(content.data); // Lưu thông tin video vào state
        }
    }, [content, id]);
    console.log("Movie key", movieId[0]?.key);
    return (
        <div>
            <Header />
            {videoDetails && (
                <div className='bg-black h-full px-13 pt-[250px]'>
                    <div className="aspect-w-16 aspect-h-9">

                        <iframe
                            className='w-full h-[800px]'
                            src={`https://www.youtube.com/embed/${movieId[0]?.key}`} // Sử dụng URL nhúng hợp lệ
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        >
                        </iframe>

                    </div>
                    {/* movie details */}
                    <div
                        className='flex flex-col md:flex-row items-center justify-between gap-20 
                   max-w-6xl mx-auto text-white mt-5 pb-20'
                    >
                        <div className='mb-4 md:mb-0'>
                            <h2 className='text-5xl font-bold text-balance'>{videoDetails.title}
                            </h2>

                            <p className='mt-2 text-lg'>

                                <span className='text-red-600'>{formatDateVN(videoDetails.release_date)} | </span>

                                <span className='text-green-600'>PG-13</span>

                            </p>
                            <p className='mt-4 text-lg'>{videoDetails.overview}  </p>
                        </div>
                        <img
                            src={ORIGINAL_IMG_TMDB + videoDetails.backdrop_path}
                            alt='Poster image'
                            className='min-h-[600px] min-w-[400px] rounded-md'
                        />
                    </div>
                </div>
            )}

            <Footer />
        </div>
    )
}

export default WatchPage
