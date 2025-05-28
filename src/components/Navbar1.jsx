import React from 'react'
import { useState } from 'react';
import nikeLogo from '/nike-logo.svg';

export const Navbar1 = () => {
    const [hovered, setHovered] = useState(null);
return (
    <div className="flex flex-row bg-white shadow-md h-18 items-center">
        {/* Left: Logo or Title */}
        <div className="flex-1 p-4 flex items-center">
            <a href="/">
                <img 
                    src={nikeLogo} 
                    alt="Nike Logo" 
                    className="h-14 w-20 mr-3 mt-1 cursor-pointer" 
                />
            </a>
            <h1 className="text-black text-3xl font-bold">Mushtaq's</h1>
        </div>
        {/* Center: Navigation Links */}
        <div className="flex  items-center justify-center gap-10 relative mr-30 ">
            {["New & Featured", "Men", "Women", "Kids", "Sale", "SNKRS"].map((item) => (
                <div
                    key={item}
                    className="relative"
                    onMouseEnter={() => setHovered(item)}
                    onMouseLeave={() => setHovered(null)}
                >
                    <p className="text-black text-[16px] cursor-pointer font-medium hover:underline underline-offset-4 decoration-black">
                        {item}
                    </p>

                    {/* Submenu */}
                    {hovered === item && item === "New & Featured" && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-lg p-6 grid grid-cols-2 gap-4 z-50 min-w-[400px] border rounded">
                            <div>
                                <p className="font-semibold mb-2">Trending</p>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    <li className="cursor-pointer hover:text-black">Latest Drops</li>
                                    <li className="cursor-pointer hover:text-black">Editor's Picks</li>
                                    <li className="cursor-pointer hover:text-black">Just In</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold mb-2">Collections</p>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    <li className="cursor-pointer hover:text-black">Sustainable Styles</li>
                                    <li className="cursor-pointer hover:text-black">Seasonal Essentials</li>
                                    <li className="cursor-pointer hover:text-black">Collabs & Limited</li>
                                </ul>
                            </div>
                        </div>
                    )}
                    {hovered === item && item === "Men" && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-lg p-6 grid grid-cols-2 gap-4 z-50 min-w-[400px] border rounded">
                            <div>
                                <p className="font-semibold mb-2">Clothing</p>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    <li className="cursor-pointer hover:text-black">T-Shirts</li>
                                    <li className="cursor-pointer hover:text-black">Hoodies</li>
                                    <li className="cursor-pointer hover:text-black">Jackets</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold mb-2">Shoes</p>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    <li className="cursor-pointer hover:text-black">Sneakers</li>
                                    <li className="cursor-pointer hover:text-black">Running</li>
                                    <li className="cursor-pointer hover:text-black">Basketball</li>
                                </ul>
                            </div>
                        </div>
                    )}
                    {hovered === item && item === "Women" && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-lg p-6 grid grid-cols-2 gap-4 z-50 min-w-[400px] border rounded">
                            <div>
                                <p className="font-semibold mb-2">Clothing</p>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    <li className="cursor-pointer hover:text-black">Leggings</li>
                                    <li className="cursor-pointer hover:text-black">Sports Bras</li>
                                    <li className="cursor-pointer hover:text-black">Jackets</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold mb-2">Shoes</p>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    <li className="cursor-pointer hover:text-black">Sneakers</li>
                                    <li className="cursor-pointer hover:text-black">Running</li>
                                    <li className="cursor-pointer hover:text-black">Lifestyle</li>
                                </ul>
                            </div>
                        </div>
                    )}
                    {hovered === item && item === "Kids" && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-lg p-6 grid grid-cols-2 gap-4 z-50 min-w-[400px] border rounded">
                            <div>
                                <p className="font-semibold mb-2">Boys</p>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    <li className="cursor-pointer hover:text-black">T-Shirts</li>
                                    <li className="cursor-pointer hover:text-black">Shorts</li>
                                    <li className="cursor-pointer hover:text-black">Sneakers</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold mb-2">Girls</p>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    <li className="cursor-pointer hover:text-black">Leggings</li>
                                    <li className="cursor-pointer hover:text-black">Dresses</li>
                                    <li className="cursor-pointer hover:text-black">Sneakers</li>
                                </ul>
                            </div>
                        </div>
                    )}
                    {hovered === item && item === "Sale" && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-lg p-6 grid grid-cols-2 gap-4 z-50 min-w-[400px] border rounded">
                            <div>
                                <p className="font-semibold mb-2">Men's Sale</p>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    <li className="cursor-pointer hover:text-black">Shoes</li>
                                    <li className="cursor-pointer hover:text-black">Clothing</li>
                                    <li className="cursor-pointer hover:text-black">Accessories</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold mb-2">Women's Sale</p>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    <li className="cursor-pointer hover:text-black">Shoes</li>
                                    <li className="cursor-pointer hover:text-black">Clothing</li>
                                    <li className="cursor-pointer hover:text-black">Accessories</li>
                                </ul>
                            </div>
                        </div>
                    )}
                    {hovered === item && item === "SNKRS" && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-lg p-6 grid grid-cols-1 gap-4 z-50 min-w-[300px] border rounded">
                            <div>
                                <p className="font-semibold mb-2">SNKRS Highlights</p>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    <li className="cursor-pointer hover:text-black">Upcoming Releases</li>
                                    <li className="cursor-pointer hover:text-black">Featured Sneakers</li>
                                    <li className="cursor-pointer hover:text-black">Launch Calendar</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
        {/* Right: Search and Icons */}
        <div className="flex items-center gap-4 pr-6">
            <input
                type="text"
                placeholder="Search"
                className="rounded-full px-6 py-3 outline-none border border-gray-300 text-lg text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
                style={{ minWidth: 120 }}
            />
            {/* Love (Favorite) Icon */}
            <button className="text-black text-2xl bg-white rounded-full p-3 flex items-center justify-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
            </button>
            {/* Bag (Cart) Icon */}
            <button className="text-black text-2xl rounded-full p-3 flex items-center justify-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="28" height="28"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
            </button>
        </div>
    </div>
)
}
