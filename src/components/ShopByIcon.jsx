import React, { useRef } from 'react';
import img1 from '../assets/shop-img1.png';
import img2 from '../assets/shop-img2.jpeg';
import img3 from '../assets/shop-img3.jpeg';
import img4 from '../assets/shop-img4.jpeg';
import img5 from '../assets/shop-img5.jpeg';
import img6 from '../assets/shop-img6.jpeg';
import img7 from '../assets/shop-img7.jpeg';
import img8 from '../assets/shop-img8.jpeg';
import img9 from '../assets/shop-img9.jpeg';
import img10 from '../assets/shop-img10.jpeg';

const items = [
  { img: img1, title: "V2K" },
  { img: img2, title: "PEGASUS 41" },
  { img: img3, title: "VOMERO 5" },
  { img: img4, title: "AIR MAX" },
  { img: img5, title: "REVOLUTION" },
  { img: img6, title: "INFINITY RN 4" },
  { img: img7, title: "STRUCTURE 25" },
  { img: img8, title: "ZOOM FLY" },
  { img: img9, title: "ALPHAFLY" },
  { img: img10, title: "INVINCIBLE 3" },
];

export const ShopByIcon = () => {
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
        <h2 className="text-2xl font-bold">Shop by Icons</h2>
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
        className="flex overflow-x-auto gap-6 scrollbar-thin scrollbar-thumb-gray-400"
      >
        {items.map((item, idx) => (
          <div key={idx} className="min-w-[500px] flex-shrink-0 text-center">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[500px] object-cover rounded-md shadow"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
