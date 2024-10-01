// import React from 'react'


// import { FaLocationCrosshairs } from "react-icons/fa6";
// import { FaSearchLocation } from "react-icons/fa";
// function Header() {

//   return (
//     <>
  

//     <div className='w-3/4 h-28 z-10 top-20 left-96 mt-0  m-5 bg-white fixed  flex  justify-end    '>
   
      
//      <div className=" flex flex-row  items-center  gap-9 ml-80  mt-8 justify-center w-3/4 h-fit  z-10 fixed  mx-auto">
   
//    <div className='flex row flex-row rounded-md items-center gap-24 justify-center border-gray-600 border-solid border-2  w-96 h-10'>
//        <h2 className='flex row justify-center items-center text-sm' >Use your current location</h2>
//       <div className='h-7 w-24 gap-2 flex justify-end items-center rounded-2xl pr-2 bg-stone-400'> near me <FaLocationCrosshairs/></div> 
//          </div>
    

//       <label
//         htmlFor="default-search"
//         className="mb-2  text-sm font-medium text-gray-900 sr-only dark:text-white"
//       >
//        <FaSearchLocation/>
//       </label>
//       <div className="relative">
//         <div
//           className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
//         >
//           <svg
//             className="w-4 h-4 text-gray-500 dark:text-gray-400"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 20 20"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//             />
//           </svg>
//         </div>
//         <input
//           type="search"
//           id="default-search"
//           className="block w-full p-4 ps-10 text-lg font-semibold text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
//           placeholder="Get your living place..."
//           required
//         />
//         <button
//           type="button"
//           className="text-white absolute end-2.5 bottom-2.5 bg-blue-700  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 "
//         >
//           S
//         </button>

        

//       </div>
      
//     </div>
//      </div>
          
//     </>
//   )
// }

// export default Header;




//beta version

import React from 'react';
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaSearchLocation } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="w-full max-w-6xl h-28 z-10 absolute top-20 right-0 mt-0 bg-white flex justify-end items-center p-5 sm:px-6 sm:py-3 mx-auto">
        
        <div className="flex items-center gap-6 ">
          {/* Location Finder */}
          <div className="flex items-center border border-gray-300 rounded-md px-4 py-1 bg-gray-50"> {/* Reduced height by changing py from 2 to 1 */}
            <h2 className="text-sm font-medium">My location</h2>
            <div className="flex items-center bg-stone-400 text-white rounded-full px-3 py-1 ml-4">
              <FaLocationCrosshairs className="ml-1" />
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative flex items-center w-40 sm:w-48 md:w-64">
            <input
              type="search"
              id="default-search"
              className="block w-full p-1 pl-3 text-sm sm:text-base font-medium text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 md:p-2 md:pl-4"
              placeholder="    Locate home"
              required
            />
            <button
              type="button"
              className="absolute right-2 bottom-2 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-full text-xs sm:text-sm px-3 py-1 focus:ring-4 focus:ring-blue-300"
            >
              <FaSearchLocation />
            </button>
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m-4.65-2.65A6.5 6.5 0 1112 5.5a6.5 6.5 0 010 13z" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Header;

