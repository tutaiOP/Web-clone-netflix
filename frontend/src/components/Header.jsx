import React from 'react'
import { Link } from 'react-router-dom'
import { Bell, Search, UserRound } from 'lucide-react'
const Header = () => {
  return (
    <div className='relative'>
       <header className="h-[60px] flex justify-between px-13 items-center bg-transparent absolute top-0 left-0 right-0" >
          <div className='flex justify-center items-center'>
             <div>
             <Link to={"/register"} className=''><img className='w-[92px] h-8' src="logo-removebg-preview.png" alt="" /></Link>
             </div>
             <div>
             <nav className="">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> 
   
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border   rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-black rounded-sm md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-black" aria-current="page">Trang chủ</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:opacity-80 md:p-0 dark:text-white md:dark:hover:text-black  dark:hover:text-white md:dark:hover:bg-transparent">Series</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:opacity-80 md:p-0 dark:text-white md:dark:hover:opacity-80  dark:hover:text-white md:dark:hover:bg-transparent">Phim</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:opacity-80 md:p-0 dark:text-white md:dark:hover:opacity-80  dark:hover:text-white md:dark:hover:bg-transparent">Mới & Phổ biến</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:opacity-80 md:p-0 dark:text-white md:dark:hover:opacity-80  dark:hover:text-white md:dark:hover:bg-transparent">Danh sách của tôi</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
             </div>
          </div>
          <div className='text-white flex justify-center items-center'>
            <div className='flex justify-center items-center relative'>
           
          <input type="text" id="search-navbar" 
          className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
             <Search className='absolute top-[5px] left-[5px] text-gray-400'/>
            </div>
            <Bell className='mx-5'/>
            <UserRound />
            </div>
       </header>
        <div>
          <img src="image.png" alt="" />
        </div>
    </div>
  )
}

export default Header
