import React, { useEffect } from 'react'
import { useContent } from '../store/useContent'
import { ORIGINAL_IMG_TMDB } from '../utils/constand'
import { Play, Info } from 'lucide-react'
import { Link } from 'react-router-dom'

const BoxImage = () => {

    const { getTrending, content } = useContent()
    useEffect(() => {
        getTrending()
    }, [])

    return (
        <div>
            <div className='w-full'>
                <img className='w-full h-[1000px]' src={ORIGINAL_IMG_TMDB + content?.data?.backdrop_path} alt="" />

            </div>
            <div className='absolute bottom-[20%] left-0 px-13 w-[800px] h-[400px]  bg-transparent'>
                <h1 className='text-6xl font-extrabold text-white'>{content?.data?.title || content?.data?.original_title}</h1>
                <p className='text-white my-2'>2025 | PG-13</p>
                <p className='text-white mb-5 text-3xl'>{content?.data?.overview}</p>
                <div className='flex '>
                    <Link to={`/watch/${content?.data?.id}`} className='flex bg-white p-3 font-bold hover:opacity-80 rounded-[5px] mr-4'>
                        <Play className='mr-1' />
                        Phát
                    </Link>
                    <Link to={`/watch/${content?.data?.id}`} className='flex bg-gray-500/70 text-white p-3 font-bold hover:opacity-80 rounded-[5px]'>
                        <Info className='mr-1' />
                        Thông tin khác
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BoxImage
