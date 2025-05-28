import React, { useRef } from 'react';
import img1 from '../assets/tn-img1.jpeg';
import img2 from '../assets/tn-img2.jpeg';
import img3 from '../assets/tn-img3.jpeg';
import img4 from '../assets/tn-img4.jpeg';
import img5 from '../assets/tn-img5.jpeg';
import img6 from '../assets/tn-img6.jpeg';

const items = [
    { img: img1, title: "Nike Pegasus 41 'Jakob Ingebrigtsen'", sub: "Men's Road Running Shoes", mrp: "MRP : ₹ 12 795.00" },
    { img: img2, title: "PEGASUS 41", sub: "Men's Training Shoes", mrp: "MRP : ₹ 9 499.00" },
    { img: img3, title: "VOMERO 5", sub: "Women's Running Shoes", mrp: "MRP : ₹ 13 299.00" },
    { img: img4, title: "AIR MAX", sub: "Unisex Lifestyle Shoes", mrp: "MRP : ₹ 10 999.00" },
    { img: img5, title: "REVOLUTION", sub: "Kids' Sports Shoes", mrp: "MRP : ₹ 4 299.00" },
    { img: img6, title: "INFINITY RN 4", sub: "Men's Road Running Shoes", mrp: "MRP : ₹ 14 599.00" },
];

export const TrendingNow = () => {
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
    <div className="w-full px-4 md:px-12 py-10 bg-gradient-to-b from-white to-gray-50">
        {/* Header and Arrows */}
        <div className="flex justify-between items-center mb-6">
        <p className="text-xl font-semibold ml-2 mt-10">Trending Now</p>
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
        <div className='flex flex-col  mt-4'>
             <p className=''>{item.title}</p>
            <p className=''>{item.sub}</p>
            <p className=''>{item.mrp}</p>
        </div>
          </div>
        ))}
      </div>
    </div>
  );
};
