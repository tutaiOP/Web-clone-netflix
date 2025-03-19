import React from 'react'
import { Link } from 'react-router-dom'

const MovieSlider = () => {
  return (
    <div className='text-white bg-black px-5 md:px-20 relative'>
      <h2 className='mb-4 text-2xl font-bold'>Top 10 bộ phim truyền hình</h2>

      <div className='flex space-x-4 overflow-x-scroll scrollbar-hide'  >
              <Link to={`/watch/1`} className=' max-w-[243px] relative group' >
                  <div className='rounded-lg overflow-hidden'>
                      <img
                          src="one-piece.jpg"
                          alt='Movie image'
                          className='transition-transform duration-300 ease-in-out group-hover:scale-125 w-[243px] h-[136px]'
                      />
                      <div className='absolute top-0 left-2 text-red-600 font-bold'>N</div>
                  </div>
                  <p className='mt-2 text-left text-lg truncate'>One Piece</p>
              </Link>
              <Link to={`/watch/1`} className=' max-w-[243px] relative group' >
                  <div className='rounded-lg overflow-hidden'>
                      <img
                          src="one-piece.jpg"
                          alt='Movie image'
                          className='transition-transform duration-300 ease-in-out group-hover:scale-125 w-[243px] h-[136px]'
                      />
                      <div className='absolute top-0 left-2 text-red-600 font-bold'>N</div>
                  </div>
                  <p className='mt-2 text-left text-lg truncate'>One Piece</p>
              </Link>
              <Link to={`/watch/1`} className=' max-w-[243px] relative group' >
                  <div className='rounded-lg overflow-hidden'>
                      <img
                          src="one-piece.jpg"
                          alt='Movie image'
                          className='transition-transform duration-300 ease-in-out group-hover:scale-125 w-[243px] h-[136px]'
                      />
                      <div className='absolute top-0 left-2 text-red-600 font-bold'>N</div>
                  </div>
                  <p className='mt-2 text-left text-lg truncate'>One Piece</p>
              </Link>
              <Link to={`/watch/1`} className=' max-w-[243px] relative group' >
                  <div className='rounded-lg overflow-hidden'>
                      <img
                          src="one-piece.jpg"
                          alt='Movie image'
                          className='transition-transform duration-300 ease-in-out group-hover:scale-125 w-[243px] h-[136px]'
                      />
                      <div className='absolute top-0 left-2 text-red-600 font-bold'>N</div>
                  </div>
                  <p className='mt-2 text-left text-lg truncate'>One Piece</p>
              </Link>
              <Link to={`/watch/1`} className=' max-w-[243px] relative group' >
                  <div className='rounded-lg overflow-hidden'>
                      <img
                          src="one-piece.jpg"
                          alt='Movie image'
                          className='transition-transform duration-300 ease-in-out group-hover:scale-125 w-[243px] h-[136px]'
                      />
                      <div className='absolute top-0 left-2 text-red-600 font-bold'>N</div>
                  </div>
                  <p className='mt-2 text-left text-lg truncate'>One Piece</p>
              </Link>
              <Link to={`/watch/1`} className=' max-w-[243px] relative group' >
                  <div className='rounded-lg overflow-hidden'>
                      <img
                          src="one-piece.jpg"
                          alt='Movie image'
                          className='transition-transform duration-300 ease-in-out group-hover:scale-125 w-[243px] h-[136px]'
                      />
                      <div className='absolute top-0 left-2 text-red-600 font-bold'>N</div>
                  </div>
                  <p className='mt-2 text-left text-lg truncate'>One Piece</p>
              </Link>
              <Link to={`/watch/1`} className=' max-w-[243px] relative group' >
                  <div className='rounded-lg overflow-hidden'>
                      <img
                          src="one-piece.jpg"
                          alt='Movie image'
                          className='transition-transform duration-300 ease-in-out group-hover:scale-125 w-[243px] h-[136px]'
                      />
                      <div className='absolute top-0 left-2 text-red-600 font-bold'>N</div>
                  </div>
                  <p className='mt-2 text-left text-lg truncate'>One Piece</p>
              </Link>
              <Link to={`/watch/1`} className=' max-w-[243px] relative group' >
                  <div className='rounded-lg overflow-hidden'>
                      <img
                          src="one-piece.jpg"
                          alt='Movie image'
                          className='transition-transform duration-300 ease-in-out group-hover:scale-125 w-[243px] h-[136px]'
                      />
                      <div className='absolute top-0 left-2 text-red-600 font-bold'>N</div>
                  </div>
                  <p className='mt-2 text-left text-lg truncate'>One Piece</p>
              </Link>
              <Link to={`/watch/1`} className=' max-w-[243px] relative group' >
                  <div className='rounded-lg overflow-hidden'>
                      <img
                          src="one-piece.jpg"
                          alt='Movie image'
                          className='transition-transform duration-300 ease-in-out group-hover:scale-125 w-[243px] h-[136px]'
                      />
                      <div className='absolute top-0 left-2 text-red-600 font-bold'>N</div>
                  </div>
                  <p className='mt-2 text-left text-lg truncate'>One Piece</p>
              </Link>
              <Link to={`/watch/1`} className=' max-w-[243px] relative group' >
                  <div className='rounded-lg overflow-hidden'>
                      <img
                          src="one-piece.jpg"
                          alt='Movie image'
                          className='transition-transform duration-300 ease-in-out group-hover:scale-125 w-[243px] h-[136px]'
                      />
                      <div className='absolute top-0 left-2 text-red-600 font-bold'>N</div>
                  </div>
                  <p className='mt-2 text-left text-lg truncate'>One Piece</p>
              </Link>
              <Link to={`/watch/1`} className=' max-w-[243px] relative group' >
                  <div className='rounded-lg overflow-hidden'>
                      <img
                          src="one-piece.jpg"
                          alt='Movie image'
                          className='transition-transform duration-300 ease-in-out group-hover:scale-125 w-[243px] h-[136px]'
                      />
                      <div className='absolute top-0 left-2 text-red-600 font-bold'>N</div>
                  </div>
                  <p className='mt-2 text-left text-lg truncate'>One Piece</p>
              </Link>
      </div>
      <button className=' absolute top-[45px] left-0 bottom-[45px] text-[100px] flex justify-center cursor-pointer'>&#60;</button>
       <button className=''>&#62;</button>
  </div>
  )
}

export default MovieSlider
