import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Bell, Search, User, CircleHelp, LogOut, Play, Info } from 'lucide-react'

import { ORIGINAL_IMG_TMDB } from '../utils/constand'
import { useAuth } from '../store/useAuth'
import { useContent } from '../store/useContent'
const Header = () => {
  const { Logout } = useAuth();
  const [isHoveredAvatar, setIsHoveredAvatar] = useState(false)
  const [isHoveredBell, setIsHoveredBell] = useState(false)
  const [formSearch, setFormSearch] = useState("");
  const { getSearchMovie } = useContent();
  const navigated = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    getSearchMovie(formSearch);
    navigated('/search');
  }

  const navigate = useNavigate();
  const handleLogOut = () => {
    Logout();
    navigate("/login");
  }

  return (
    <div className='relative'>
      <header className="h-[60px] flex justify-between px-13 items-center bg-transparent absolute top-0 left-0 right-0 z-10" >
        <div className='flex justify-center items-center'>
          <div>
            <Link to={"/register"} className=''><img className='w-[92px] h-8' src="logo-removebg-preview.png" alt="" /></Link>
          </div>
          <div>
            <nav className="">
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                  <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border   rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                    <Link to={"/"} className=''>
                      <li>
                        <span className="block py-2 px-3 text-white bg-black rounded-sm md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-black" aria-current="page">Trang chủ</span>
                      </li>
                    </Link>
                    <Link to={"/genre"} className=''>
                      <li>
                        <span className="block py-2 px-3 text-white bg-black rounded-sm md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-black" aria-current="page">Series</span>
                      </li>
                    </Link>
                    <Link to={"/latest"} className=''>
                      <li>
                        <span className="block py-2 px-3 text-white bg-black rounded-sm md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-black" aria-current="page">Mới & phổ biến</span>
                      </li>
                    </Link>
                    <Link to={"/my-list"} className=''>
                      <li>
                        <span className="block py-2 px-3 text-white bg-black rounded-sm md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-black" aria-current="page">Danh sách của tôi</span>
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className='text-white flex justify-center items-center'>
          <div className='flex justify-center items-center relative'>
            <form onSubmit={handleSearch}>
              <input type="text" id="search-navbar" value={formSearch}
                onChange={(e) => setFormSearch(e.target.value)}
                className="block w-full p-2 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />

              <Search className='absolute top-[5px] left-[5px] text-white' />
            </form>

          </div>

          <div className='relative'
            onMouseEnter={() => setIsHoveredBell(true)}
            onMouseLeave={() => setIsHoveredBell(false)}
          >

            <Bell className='mx-5  cursor-pointer' />
            {isHoveredBell && (
              <>
                <div className='triangle-up absolute w-0 h-0 top-6 cursor-pointer right-[27px]'></div>
                <div className='absolute top-[34px] right-[15px] w-90 h-120 bg-black rounded-lg  duration-150 overflow-y-scroll '>
                  <div className='border-b-2 border-gray-800 mb-2'>
                    <div className='flex mb-2 mx-2 relative my-3'>
                      <div className='w-50 h-20 mr-2 '>
                        <img src="phi-vu-trieu-do.webp" className='w-full h-full object-cover rounded-lg' alt="" />
                      </div>
                      <div>
                        <h2 className='text-[14px] '>Ra mắt vào Ngày 22 tháng 3 Xem giới thiệu ngay hôm nay.</h2>
                        <span className='text-[12px] text-gray-500'>Hôm nay</span>
                      </div>

                    </div>
                  </div>
                  <div className='border-b-2 border-gray-800 mb-2'>
                    <div className='flex mb-2 mx-2 relative my-3'>
                      <div className='w-50 h-20 mr-2 '>
                        <img src="one-piece.jpg" className='w-full h-full object-cover rounded-lg' alt="" />
                      </div>
                      <div>
                        <h2 className='text-[14px] '>Ra mắt vào Ngày 22 tháng 3 Xem giới thiệu ngay hôm nay.</h2>
                        <span className='text-[12px] text-gray-500'>Hôm nay</span>
                      </div>

                    </div>
                  </div>
                  <div className='border-b-2 border-gray-800 mb-2'>
                    <div className='flex mb-2 mx-2 relative my-3'>
                      <div className='w-50 h-20 mr-2 '>
                        <img src="one-piece.jpg" className='w-full h-full object-cover rounded-lg' alt="" />
                      </div>
                      <div>
                        <h2 className='text-[14px] '>Ra mắt vào Ngày 22 tháng 3 Xem giới thiệu ngay hôm nay.</h2>
                        <span className='text-[12px] text-gray-500'>Hôm nay</span>
                      </div>

                    </div>
                  </div>
                  <div className='border-b-2 border-gray-800 mb-2'>
                    <div className='flex mb-2 mx-2 relative my-3'>
                      <div className='w-50 h-20 mr-2 '>
                        <img src="one-piece.jpg" className='w-full h-full object-cover rounded-lg' alt="" />
                      </div>
                      <div>
                        <h2 className='text-[14px] '>Ra mắt vào Ngày 22 tháng 3 Xem giới thiệu ngay hôm nay.</h2>
                        <span className='text-[12px] text-gray-500'>Hôm nay</span>
                      </div>

                    </div>
                  </div>
                  <div className='border-b-2 border-gray-800 mb-2'>
                    <div className='flex mb-2 mx-2 relative my-3'>
                      <div className='w-50 h-20 mr-2 '>
                        <img src="one-piece.jpg" className='w-full h-full object-cover rounded-lg' alt="" />
                      </div>
                      <div>
                        <h2 className='text-[14px] '>Ra mắt vào Ngày 22 tháng 3 Xem giới thiệu ngay hôm nay.</h2>
                        <span className='text-[12px] text-gray-500'>Hôm nay</span>
                      </div>

                    </div>
                  </div>
                </div>
              </>

            )}

          </div>



          <div
            className='w-13 h-13 relative'
            onMouseEnter={() => setIsHoveredAvatar(true)}
            onMouseLeave={() => setIsHoveredAvatar(false)}
          >

            <img src="/avatar-1.png" alt="Avatar" className='object-contain cursor-pointer' />
            {isHoveredAvatar && (
              <>
                <div className='triangle-up absolute w-0 h-0 bottom-[-2px] right-[19px]'></div>
                <div className='absolute top-[54px] right-[10px] w-55 m-h-24 bg-black rounded-lg p-4 duration-150 '>
                  <div className='flex flex-col '>
                    <div className='flex mb-2 '>
                      <User />
                      <Link to={"/"} className='ml-2 hover:underline'> Tài khoản</Link>
                    </div>
                    <div className='flex mb-2 '>
                      <CircleHelp />
                      <Link to={"/"} className='ml-2 hover:underline'> Trung tâm trợ giúp</Link>
                    </div>
                    <div className='flex  ' onClick={handleLogOut}>
                      <LogOut />
                      <Link to={"/"} href="" className='ml-2 hover:underline' > Đăng xuất</Link>
                    </div>
                  </div>
                </div>
              </>

            )}
          </div>
        </div>
      </header>

      {/* <div className='w-full'>
        <img className='w-full h-[1000px]' src={ORIGINAL_IMG_TMDB + content?.data?.backdrop_path} alt="" />

      </div>
      <div className='absolute bottom-[20%] left-0 px-13 w-[800px] h-[400px]  bg-transparent'>
        <h1 className='text-6xl font-extrabold text-white'>Novocaine</h1>
        <p className='text-white my-2'>2025 | PG-13</p>
        <p className='text-white mb-5 text-3xl'>When the girl of his dreams is kidnapped, everyman Nate turns his inability to feel pain into an unexpected strength in his fight to get her back.</p>
        <div className='flex '>
          <Link to={"/"} className='flex bg-white p-3 font-bold hover:opacity-80 rounded-[5px] mr-4'>
            <Play className='mr-1' />
            Phát
          </Link>
          <Link to={"/"} className='flex bg-gray-500/70 text-white p-3 font-bold hover:opacity-80 rounded-[5px]'>
            <Info className='mr-1' />
            Thông tin khác
          </Link>
        </div>
      </div> */}
    </div>
  )
}

export default Header
