import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Bell, Search, User, CircleHelp, LogOut } from 'lucide-react'
const Header = () => {
  const [isHoveredAvatar, setIsHoveredAvatar] = useState(false)
  const [isHoveredBell, setIsHoveredBell] = useState(false)

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
           
          <input type="text" id="search-navbar" 
          className="block w-full p-2 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
             <Search className='absolute top-[5px] left-[5px] text-white'/>
            </div>

            <div className='relative'
            onMouseEnter={() => setIsHoveredBell(true)}
            onMouseLeave={() => setIsHoveredBell(false)}
            >
          
             <Bell className='mx-5  cursor-pointer'/>
              {isHoveredBell && (
                <>
                  <div className='triangle-up absolute w-0 h-0 top-6 cursor-pointer right-[27px]'></div>
                  <div className='absolute top-[34px] right-[15px] w-90 h-100 bg-black rounded-lg  duration-150 overflow-y-scroll '>
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
                     <User/>
                      <a href="" className='ml-2 hover:underline'> Tài khoản</a>
                  </div>
                  <div className='flex mb-2 '>
                  <CircleHelp/>
                      <a href="" className='ml-2 hover:underline'> Trung tâm trợ giúp</a>
                  </div>
                  <div className='flex  '>
                  <LogOut/>
                      <a href="" className='ml-2 hover:underline'> Đăng xuất</a>
                  </div>
               </div>
          </div>
              </>
              
            )}
           </div>
            </div>
       </header>
        <div className='w-full'>
          <img className='w-full h-[800px]' src="image.png" alt="" />
        </div>
    </div>
  )
}

export default Header
