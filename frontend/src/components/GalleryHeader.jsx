import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const GalleryHeader = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible); // Đổi trạng thái hiển thị
    };
    return (
        <div className='flex items-center'>
            <h1 className='text-4xl text-white font-medium'>Series</h1>
            <div className='relative  flex ml-5 py-1 px-5 items-center text-left bg-black font-medium text-white border border-white cursor-pointer'
                onClick={toggleDropdown}
            >
                <p className='hover:opacity-80'>  Thể loại</p>
                <ChevronDown className='ml-2' />
                {isDropdownVisible && (
                    <div className='absolute flex justify-between top-[35px] left-[-2px] min-w-[580px] h-[200px] bg-black p-2'>
                        <ul>
                            <li ><Link to={"/"} className='hover:underline' href="">Anh</Link></li>
                            <li ><Link to={"/"} className='hover:underline' href="">Anime</Link></li>
                            <li ><Link to={"/"} className='hover:underline' href="">Châu Á</Link></li>
                            <li ><Link to={"/"} className='hover:underline' href="">Châu Âu</Link></li>
                            <li ><Link to={"/"} className='hover:underline' href="">Chính kịch</Link></li>
                            <li ><Link to={"/"} className='hover:underline' href="">Giật gân</Link></li>
                            <li ><Link to={"/"} className='hover:underline' href="">Hài</Link></li>
                        </ul>
                        <ul className='mx-1'>
                            <li ><Link to={"/"} className='hover:underline' href="">Hành động</Link></li>
                            <li ><Link to={"/"} className='hover:underline' href="">Khoa học và tự nhiên</Link></li>
                            <li ><Link to={"/"} className='hover:underline' href="">Khoa học viễn tưởng và giả tưởng</Link></li>
                            <li ><Link to={"/"} className='hover:underline' href="">Kinh dị</Link></li>
                            <li ><Link to={"/"} className='hover:underline' href="">Lãng mạn</Link></li>
                            <li ><Link to={"/"} className='hover:underline' href="">Loạt phim tài liệu</Link></li>
                            <li ><Link to={"/"} className='hover:underline' href="">Mỹ</Link></li>
                        </ul>
                        <ul>
                            <li ><Link to={"/"} className='hover:underline' href="">Phim chính kịch Hàn Quốc</Link></li>
                            <li ><Link to={"/"} className='hover:underline' href="">Phụ nữ và hành động</Link></li>
                            <li ><Link to={"/"} className='hover:underline' href="">Tội phạm</Link></li>
                            <li ><Link to={"/"} className='hover:underline' href="">Trẻ em</Link></li>
                            <li ><Link to={"/"} className='hover:underline' href="">Tuổi teen</Link></li>

                        </ul>
                    </div>
                )}

            </div>
        </div>
    )
}

export default GalleryHeader
