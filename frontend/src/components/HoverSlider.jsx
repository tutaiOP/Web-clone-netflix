import React from 'react'
import { CirclePlus, CircleSmall, Play, Plus, ThumbsUp, X } from 'lucide-react';
const HoverSlider = () => {
    return (
        <div className="absolute rounded-2xl  top-[-51px] h-auto left-[24px] w-[550px]  rounded-2xl border border-amber-600 duration-150 bg-black">
            <div className='w-full h-[300px] relative'>
                <img src="phi-vu-trieu-do.webp" className='w-full h-full object-fill rounded-t-2xl ' alt="" />
                <p className='absolute bottom-0 left-[10px] text-white'>One piece</p>
            </div>
            <div>
                <div className='flex gap-2 mx-5 my-5 '>
                    <Play className='text-black  bg-white p-2 rounded-full border cursor-pointer size-10 border-gray-600 hover:border-white hover:opacity-80 ' />
                    <Plus className='text-white p-2 rounded-full border cursor-pointer size-10 border-gray-600 hover:border-white ' />
                    <X className='text-white p-2 rounded-full border cursor-pointer size-10 border-gray-600 hover:border-white ' />
                    <ThumbsUp className='text-white p-2 rounded-full border cursor-pointer size-10 border-gray-600 hover:border-white ' />
                </div>
                <div className='text-white flex mx-5 my-5 '>
                    <span>Kịch tính</span>
                    <CircleSmall className='text-gray-800 size-5 mx-2' />
                    <span>Hành động</span>
                </div>
            </div>
        </div>
    )
}

export default HoverSlider
