import React from 'react'
import img1 from "../assets/featured1.jpeg";
import img2 from "../assets/featured2.jpeg";
import img3 from "../assets/featured3.jpeg";
import theLatest from "../assets/theLatest.mp4";

export const Featured = () => {
return (
    <>
        {/* featured */}
        <p className='text-2xl font-semibold ml-5 mt-3'>Featured</p>
        <div className='flex flex-row items-center justify-center h-full w-full mt-5 gap-5 px-5'>
            <div className='flex flex-col items-center justify-center cursor-pointer'>
                <img src={img3} alt="Featured 1" className='cursor-pointer' />
                <p className='text-xl font-semibold mt-5'>Your One And Only Layer</p>
            </div>
            <div className='flex flex-col items-center justify-center cursor-pointer'>
                <img src={img2} alt="Featured 2" className='cursor-pointer' />
                <p className='text-xl font-semibold mt-5'>Nike KillShot</p>
            </div>
            <div className='flex flex-col items-center justify-center cursor-pointer'>
                <img src={img1} alt="Featured 3" className='cursor-pointer' />
                <p className='text-xl font-semibold mt-5'>Nike Sonic Fly</p>
            </div>
        </div>

        {/* The Latest  */}
        <p className='text-2xl font-semibold ml-5 mt-10'>The Latest</p>
        <div className='flex flex-row items-center justify-center h-full w-full mt-5 gap-5 px-5'>
            <div className='flex flex-col items-center justify-center cursor-pointer'>
                <video
                    src={theLatest}
                    autoPlay
                    loop
                    muted
                    className='cursor-pointer'
                    playsInline
                />
               <p className='text-[60px]  font-extrabold text-center mt-4'>FLY VINI</p>
               <p className='text-[16px]'>Welcome abroad supersonic speed in the first Vini Jr.</p>
                <button className='bg-black text-white text-xl mt-4 border rounded-3xl p-2 w-[200px]'>Shop Mercurial</button>
            </div>
        </div>
    </>
)
}
