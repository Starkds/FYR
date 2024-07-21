import React from 'react';
import { useState } from 'react';
import { LuChevronLeft } from "react-icons/lu";
import { LuChevronRight } from "react-icons/lu";
import { ImStarFull } from "react-icons/im";
function PlaceInfo(){

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
    '/public/images/Location-media/image/Bedroom1.jpg',
     '/public/images/Location-media/image/Bathroom2.jpg',
      '/public/images/Location-media/image/Bedroom2.jpg',
       '/public/images/Location-media/image/Kitchen1.jpg',
        '/public/images/Location-media/image/Bathroom1.jpg'
    ];

    const handleLeftClick = () =>{
        setCurrentIndex((currentIndex -1 + images.length) % images.length);
    };
    
    const handleRightClick  = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };
    return (
        <>
        <div  className='mt-14'>
            <div
      className="flex justify-center h-screen w-full"
      style={{ height: '75vh' }}
    >
      <div className="relative w-full h-full">
        <img
          src={images[currentIndex]}
          alt="Sliding Image"
          className="w-full h-full object-cover"
        />
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md"
          onClick={handleLeftClick}
        >
         <LuChevronLeft  />
        </button>
        <button
          className="absolute right-0  top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md"
          onClick={handleRightClick}
        >
       <LuChevronRight />
        </button>
      </div>
    </div>


    <div className='w-3/12 h-fit'>
      <div> Heaven Inn</div>
      <div className='flex w-10 '>
        < ImStarFull/> 
          4.5  rating 
      </div>
    </div>
        </div>
        </>
    );
}

export default PlaceInfo;