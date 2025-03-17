import { Eye, EyeOff } from 'lucide-react'
import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <><div className='w-full bia-bg h-screen z-50'>
    <div className='h-[92px]'>
    <header className='flex justify-between items-center px-[300px] h-full' >
         <div className=''><img className='h-[40px] w-[142px] bg-transparent' src="logo-removebg-preview.png" alt="" /></div>
        
    </header>
    </div>

    <div className=" flex  justify-center ">
    <div className="bg-black  text-white p-8 rounded-lg shadow-lg w-full max-w-sm">
      <h2 className="text-3xl font-semibold text-center  mb-6">Đăng ký</h2>
      
      <form >
        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
           
            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Nhập email của bạn"
            required
          />
        </div>

          {/* Username Input */}
          <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
          <input
            type="text"
            id="username"
            name="username"
           
            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Nhập email của bạn"
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-6 relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">Mật khẩu</label>
          <input
            type="password"
            id="password"
            name="password"
          
            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Nhập mật khẩu của bạn"
            required
          />
          <Eye className='size-6 absolute top-[40px] right-[12px] text-white'/>
          {/* <EyeOff className='size-6 absolute top-[40px] right-[12px] text-white'/> */}
        </div>

         {/* RePassword Input */}
         <div className="mb-6 relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">Nhập lại mật khẩu</label>
          <input
            type="password"
            id="password"
            name="password"
          
            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Nhập lại mật khẩu của bạn"
            required
          />
          <Eye className='size-6 absolute top-[40px] right-[12px] text-white'/>
          {/* <EyeOff className='size-6 absolute top-[40px] right-[12px] text-white'/> */}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-500 text-white p-3 rounded-lg hover:opacity-80 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Đăng Ký
        </button>
      </form>

      {/*  Link Login */}
      <div className='mt-4 text-center'>
        <span>Bạn đã có tài khoản? </span> <Link to={"/login"} className='hover:underline'>Đăng nhập.</Link>
      </div>
    </div>
  </div>
  </div>
    <Footer/>
  </>
  )
}

export default Register
