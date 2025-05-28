import React, { useRef } from 'react';
import img1 from '../assets/running.jpeg';
import img2 from '../assets/football.jpeg';
import img3 from '../assets/basketball.jpeg';
import img4 from '../assets/training.jpeg';
import img5 from '../assets/tennis.jpeg';
import img6 from '../assets/yoga.jpeg';
import img7 from '../assets/skating.jpeg';
import img8 from '../assets/dance.jpeg';


const items = [
  { img: img1, title: "Running" },
  { img: img2, title: "Football" },
  { img: img3, title: "Basket Ball" },
  { img: img4, title: "Training & Gym" },
  { img: img5, title: "Tennis" },
  { img: img6, title: "Yoga" },
  { img: img7, title: "Skating" },
  { img: img8, title: "Dance" },

];


  


export const SBS = () => {
    const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -500 : 500,
        behavior: 'smooth',
      });
    }
};
return (
    <div className="w-full px-8">
        {/* Header and Arrows */}
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Shop by Sport</h2>
            <div className="flex gap-4">
                <button onClick={() => scroll('left')} className="text-xl">
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button onClick={() => scroll('right')} className="text-xl">
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>

        {/* Scrollable Card Row */}
        <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-3 scrollbar-thin scrollbar-thumb-gray-400"
        >
            {items.map((item, idx) => (
                <div key={idx} className="min-w-[400px] flex-shrink-0 text-center relative">
                    <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-[400px] object-cover rounded-md shadow cursor-pointer"
                    />
                    <div className="absolute bottom-6 ml-4  bg-white bg-opacity-60 px-4 py-2 rounded-2xl shadow">
                        <p className="font-semibold text-gray-800 text-[14px] cursor-pointer ">{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
};
