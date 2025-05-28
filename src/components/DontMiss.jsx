import React from 'react'
import img1 from "../assets/dm-img1.jpeg"
import img2 from "../assets/dm-img2.jpeg";

export const DontMiss = () => {
return (
    <>
        <p className="text-xl font-semibold ml-14 mt-10">Don't Miss</p>
        <div className='flex flex-row items-center justify-center h-full w-full mt-5 pl-14 pr-10 gap-3'>
            <div className="relative">
                <img src={img1} alt=""  className='cursor-pointer'/>
                <div className="absolute bottom-4 left-4  bg-opacity-80 p-3 rounded shadow">
                    <p className="font-semibold mb-3 text-white text-2xl">Luka.77 "Space Navigator"</p>
                    <button className="bg-white font-bold px-4 py-2 rounded-xl hover:bg-gray-800 transition cursor-pointer">Shop</button>
                </div>
            </div>
            <div className="relative">
                <img src={img2} alt=""  className='cursor-pointer'/>
                <div className="absolute bottom-4 left-4  bg-opacity-80 p-3 rounded shadow">
                    <p className="font-semibold mb-2 text-white text-2xl">Air Jordan1 "Ruby"</p>
                     <button className="bg-white font-bold px-4 py-2 rounded-xl hover:bg-gray-800 transition cursor-pointer">Shop</button>
                </div>
            </div>
        </div>
    </>
)
}
