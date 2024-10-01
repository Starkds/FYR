// import React from 'react';
// import { useState } from 'react';
// import { LuChevronLeft } from "react-icons/lu";
// import { LuChevronRight } from "react-icons/lu";
// import { FaWifi } from "react-icons/fa";
// import { MdWifiOff } from "react-icons/md";
// import { LuIndianRupee } from "react-icons/lu";
// function PlaceInfo(){

//     const [currentIndex, setCurrentIndex] = useState(0);

//     const images = [
//     '/public/images/Location-media/image/Bedroom1.jpg',
//      '/public/images/Location-media/image/Bathroom2.jpg',
//       '/public/images/Location-media/image/Bedroom2.jpg',
//        '/public/images/Location-media/image/Kitchen1.jpg',
//         '/public/images/Location-media/image/Bathroom1.jpg'
//     ];

//     const handleLeftClick = () =>{
//         setCurrentIndex((currentIndex -1 + images.length) % images.length);
//     };
    
//     const handleRightClick  = () => {
//         setCurrentIndex((currentIndex + 1) % images.length);
//     };
//     return (
//         <>
//         <div  className='mt-14  border-2 border-solid border-gray-800'>
//             <div
//       className="flex justify-center h-screen w-full"
//       style={{ height: '75vh' }}
//     >
//       <div className="relative w-full h-full">
//         <img
//           src={images[currentIndex]}
//           alt="Sliding Image"
//           className="w-full h-full object-cover"
//         />
//         <button
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md"
//           onClick={handleLeftClick}
//         >
//          <LuChevronLeft  />
//         </button>
//         <button
//           className="absolute right-0  top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md"
//           onClick={handleRightClick}
//         >
//        <LuChevronRight />
//         </button>
//       </div>
//     </div>

  
    
//         </div>
  
//         <div className='w-screen  h-fit  gap-4   flex '>  
   
//    <div className='w-3/5 h-2/4  mt-10 m-auto  ' > 
   
//    <div className='flex justify-between mx-auto w-11/12 items-center'>
//      <div className='flex flex-col ' >
//      <p className='text-4xl font-semibold my-3 '>Super Capital O</p>
//      <p className='text-2xl font-medium '>b-23 , near park , mela ground , gola ka mandir , gwalior</p>
//      <p className='text-xl'> 423045</p>
//      </div>
//       <div> 
//        {/* space for rating */}
//       </div>
//       </div>

  


//     <div className='w-11/12  h-fit p-1  mt-5  m-auto  '>
//      <h1 className='text-2xl  font-600 my-2'>Facilities</h1>
//      <ul className='flex flex-wrap  gap-3'>
//        <li className='border-2 border-slate-400 w-fit flex items-center gap-3  justify-between p-1 bg-zinc-200 border-solid  rounded-lg '>< FaWifi/> free wifi</li>
//        <li  className='border-2 border-slate-400 w-fit flex items-center gap-3  justify-between p-1 bg-zinc-200 border-solid  rounded-lg ' > No water bill included</li>
//        <li  className='border-2 border-slate-400 w-fit flex items-center gap-3  justify-between p-1 bg-zinc-200 border-solid  rounded-lg '>Electriciy bill excluded</li>
//        <li  className='border-2 border-slate-400 w-fit flex items-center gap-3  justify-between p-1 bg-zinc-200 border-solid  rounded-lg  '>nearby shops</li>
//        <li  className='border-2 border-slate-400 w-fit flex items-center gap-3  justify-between p-1 bg-zinc-200 border-solid  rounded-lg  '>main road connected</li>
//      </ul>
//      </div>  

//      <div className='w-11/12  h-fit p-1  mt-5  m-auto  '>
//      <h1 className='text-2xl  font-600 my-2 '>Restrictions</h1>
//      <ul className='flex flex-wrap  gap-3'>
//        <li className='border-2 border-slate-400 w-fit flex items-center gap-3  justify-between p-1 bg-zinc-200 border-solid  rounded-lg  '>< MdWifiOff/> No wifi</li>
//        <li  className='border-2 border-slate-400 w-fit flex items-center gap-3  justify-between p-1 bg-zinc-200 border-solid  rounded-lg  ' >  water bill included</li>
//        <li  className='border-2 border-slate-400 w-fit flex items-center gap-3  justify-between p-1 bg-zinc-200 border-solid  rounded-lg  '>Electriciy bill included</li>
//        <li  className='border-2 border-slate-400 w-fit flex items-center gap-3  justify-between p-1 bg-zinc-200 border-solid  rounded-lg  '>No personal gate</li>
       
//      </ul>
//      </div>       
    
//    </div>
//    <div className='w-1/3  h-96 border-2 mt-10  m-auto   border-solid  border-black '> 
     
//      <h1 className='flex text-3xl font-bold text-stone-500 items-center'> <LuIndianRupee/>  3000  /per month </h1>
//       <div className='flex justify-center items-end '>
//       <button
//       className="  block w-3/5 select-none  rounded-lg bg-gray-900 mt-60 py-3.5 px-20 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//       type="button">
//       Continue to book
//     </button>
//       </div>
     

//     </div>

   
//      </div>
      
//      <div className='flex w-screen  justify-center border-black border-2 border-solid my-5 h-fit flex-row '> 
//     <h2 className='text-3xl w-10/12  m-10'>Reviews</h2>
//     <ul>
//       <li></li>
//       <li></li>
//       <li></li>
//       <li></li>
//       <li></li>
//       <li></li>
//     </ul>
//      </div>
//         </>
//     );
// }

// export default PlaceInfo;




//beta version



import React, { useState } from 'react';
import { LuChevronLeft, LuChevronRight, LuIndianRupee } from "react-icons/lu";
import { FaWifi } from "react-icons/fa";
import { MdWifiOff } from "react-icons/md";

function PlaceInfo() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        '/public/images/Location-media/image/Bedroom1.jpg',
        '/public/images/Location-media/image/Bathroom2.jpg',
        '/public/images/Location-media/image/Bedroom2.jpg',
        '/public/images/Location-media/image/Kitchen1.jpg',
        '/public/images/Location-media/image/Bathroom1.jpg'
    ];

    const handleLeftClick = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const handleRightClick = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    return (
        <>
            <div className='mt-14 border-2 border-solid border-gray-800'>
                <div className="flex justify-center h-screen w-full" style={{ height: '75vh' }}>
                    <div className="relative w-full h-full">
                        <img src={images[currentIndex]} alt="Sliding Image" className="w-full h-full object-cover" />
                        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md" onClick={handleLeftClick}>
                            <LuChevronLeft />
                        </button>
                        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md" onClick={handleRightClick}>
                            <LuChevronRight />
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row w-screen h-fit gap-4'>
                <div className='w-full lg:w-3/5 h-fit mt-10 m-auto'>
                    <div className='flex justify-between mx-auto w-11/12 items-center'>
                        <div className='flex flex-col'>
                            <p className='text-4xl font-semibold my-3'>Super Capital O</p>
                            <p className='text-2xl font-medium'>b-23, near park, mela ground, gola ka mandir, gwalior</p>
                            <p className='text-xl'>423045</p>
                        </div>
                        <div>
                            {/* Space for rating */}
                        </div>
                    </div>

                    <div className='w-11/12 h-fit p-1 mt-5 m-auto'>
                        <h1 className='text-2xl font-semibold my-2'>Facilities</h1>
                        <ul className='flex flex-wrap gap-3'>
                            <li className='border-2 border-slate-400 w-fit flex items-center gap-3 justify-between p-1 bg-zinc-200 border-solid rounded-lg'><FaWifi /> Free WiFi</li>
                            <li className='border-2 border-slate-400 w-fit flex items-center gap-3 justify-between p-1 bg-zinc-200 border-solid rounded-lg'>No water bill included</li>
                            <li className='border-2 border-slate-400 w-fit flex items-center gap-3 justify-between p-1 bg-zinc-200 border-solid rounded-lg'>Electricity bill excluded</li>
                            <li className='border-2 border-slate-400 w-fit flex items-center gap-3 justify-between p-1 bg-zinc-200 border-solid rounded-lg'>Nearby shops</li>
                            <li className='border-2 border-slate-400 w-fit flex items-center gap-3 justify-between p-1 bg-zinc-200 border-solid rounded-lg'>Main road connected</li>
                        </ul>
                    </div>

                    <div className='w-11/12 h-fit p-1 mt-5 m-auto'>
                        <h1 className='text-2xl font-semibold my-2'>Restrictions</h1>
                        <ul className='flex flex-wrap gap-3'>
                            <li className='border-2 border-slate-400 w-fit flex items-center gap-3 justify-between p-1 bg-zinc-200 border-solid rounded-lg'><MdWifiOff /> No WiFi</li>
                            <li className='border-2 border-slate-400 w-fit flex items-center gap-3 justify-between p-1 bg-zinc-200 border-solid rounded-lg'>Water bill included</li>
                            <li className='border-2 border-slate-400 w-fit flex items-center gap-3 justify-between p-1 bg-zinc-200 border-solid rounded-lg'>Electricity bill included</li>
                            <li className='border-2 border-slate-400 w-fit flex items-center gap-3 justify-between p-1 bg-zinc-200 border-solid rounded-lg'>No personal gate</li>
                        </ul>
                    </div>
                </div>

                <div className='w-full lg:w-1/3 h-fit border-2 mt-10 m-auto border-solid border-black'> 
                    <h1 className='flex text-3xl font-bold text-stone-500 items-center justify-center'><LuIndianRupee /> 3000 /per month</h1>
                    <div className='flex justify-center items-end mb-5'>
                        <button
                            className="block w-3/5 select-none rounded-lg bg-gray-900 py-3.5 px-20 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            Continue to book
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex w-screen justify-center border-black border-2 border-solid my-5 h-fit flex-row'> 
                <h2 className='text-3xl w-10/12 m-10'>Reviews</h2>
                <ul className='w-10/12'>
                    <li>Great place to stay!</li>
                    <li>Comfortable and clean.</li>
                    <li>Good amenities.</li>
                    <li>Highly recommended.</li>
                    <li>Will visit again!</li>
                </ul>
            </div>
        </>
    );
}

export default PlaceInfo;
