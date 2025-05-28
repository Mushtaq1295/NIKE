import React from 'react';
import mainImg from '../assets/main-img.jpeg';

export const Content = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full cursor-pointer'>
      <img 
        className='pl-15  pr-15'
        src={mainImg} 
        alt="Main Nike shoe displayed prominently..." 
        />
      <p className='text-[60px]  font-extrabold text-center mt-4'>
        ELEVATE YOUR LOOK
      </p>
      <p className='text-[16px]'>Be ready for anything with season's newest styles.</p>
      <button className='bg-black text-white text-xl mt-4 border rounded-3xl p-2 w-[150px]'>Shop Sandals</button>
    </div>
  );
};
