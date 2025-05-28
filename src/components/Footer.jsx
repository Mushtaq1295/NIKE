import React from 'react';

export const Footer = () => {
    const col1 = [ "Find A Store",
    "Become A Member",
    "Running Shoe Finder",
    "Product Advice",
    "Send Us Feedback"
  ];
  const col2 =["Get Help",
    "Order Status",
    "Shipping and Delivery",
    "Returns",
    "Payment Options",
    "Contact Us",
    "FAQ"
  ];
  const col3 = ["About Nike",
    "News",
    "Careers",
    "Investors",
    "Sustainability"
  ];
  return (
   <>
    <hr  className='mt-[50px] text-gray-300'/>
    <div className="flex flex-row justify-around w-full mt-5">
        <div className='flex flex-row items-center justify-center h-full w-full mt-4 gap-7'>
            <div className='flex flex-col '>
            <p className='text-[16px] font-medium text-black mb-8'>Resources</p>
            {col1.map((item,index) =>(
                <p key={index} className='text-[16px] text-gray-600 cursor-pointer'>{item}</p>
            ))}
        </div>
    </div>
    <div className='flex flex-row items-center justify-center h-full w-full mt-4 gap-7'>
            <div className='flex flex-col '>
            <p className='text-[16px] font-medium text-black mb-8'>Help</p>
            {col2.map((item,index) =>(
                <p key={index} className='text-[16px] text-gray-600 cursor-pointer'>{item}</p>
            ))}
            </div>
    </div>
    <div className='flex flex-row items-center justify-center h-full w-full mt-4 gap-7'>
        <div className='flex flex-col '>
            <p className='text-[16px] font-medium text-black mb-8'>Company</p>
            {col3.map((item,index) =>(
                <p key={index} className='text-[16px] text-gray-600 cursor-pointer'>{item}</p>
            ))}
        </div>
    </div>
   
    </div>
    <div className='flex flex-row  h-full w-full mt-10 mb-5 ml-4 gap-7'>
        <p className='text-[16px] text-gray-600'>© 2025 Mushtaq, Inc. All Rights Reserved</p>
        <p className='text-[16px] text-gray-600'>Guides</p>
        <p className='text-[16px] text-gray-600'>Terms of sale</p>
        <p className='text-[16px] text-gray-600'>Interest-Based Ads</p>
        <p className='text-[16px] text-gray-600'>Terms of Use</p>
        <p className='text-[16px] text-gray-600'>CA Supply Chains Act | Do Not Sell My Personal Information</p>
        <p className='text-[16px] text-gray-600'>Site Map</p>
    </div>

   


   </>
  )
}
