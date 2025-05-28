import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export const Navbar2 = () => {
    const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst(prev => !prev);  // Toggle between first and second part
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <div className="w-full ">
      {showFirst ? (
        // First Part
        <div className="flex flex-col bg-gray-150 shadow-md h-20 items-center transition-all duration-500">
          <div className="flex-1 p-2 flex items-center">
            <p>New Styles On Sale: Up To 40% Off</p>
          </div>
          <div className="flex-2 p-2 flex items-center justify-center">
            <a href="">Shop All Our New Markdowns</a>
          </div>
        </div>
      ) : (
        // Second Part
        <div className="flex flex-col bg-white shadow-md h-20 items-center transition-all duration-500">
          <div className="flex-1 p-2 flex items-center">
            <p>Move, Shop, Customise & Celebrate With Us</p>
          </div>
          <div className="flex-2 p-2 flex items-center">
            <p>No matter what you feel like doing today, It’s better as a Member.</p>
          </div>
         
        </div>
      )}
    </div>
  );
};