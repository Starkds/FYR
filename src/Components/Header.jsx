import React from 'react'
import { RiMapPinLine } from "react-icons/ri";
import Navbar from './Navbar';
import { FaLocationCrosshairs } from "react-icons/fa6";
function Header() {

  return (
    <>
  

    <div className='w-3/4 h-28 z-10 top-20 left-96 mt-0  m-5 bg-white fixed  flex  justify-end    '>
   
      
     <div className=" flex flex-row  items-center  gap-9 ml-80  mt-8 justify-center w-3/4 h-fit  z-10 fixed  mx-auto">
   
   <div className='flex row flex-row rounded-md items-center gap-24 justify-center border-gray-600 border-solid border-2  w-96 h-10'>
       <h2 className='flex row justify-center items-center text-sm' >Use your current location</h2>
      <div className='h-7 w-24 gap-2 flex justify-end items-center rounded-2xl bg-stone-400'> near me <FaLocationCrosshairs/></div> 
         </div>
    

      <label
        htmlFor="default-search"
        className="mb-2  text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div
          className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-lg font-semibold text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
          placeholder="Get your living place..."
          required
        />
        <button
          type="button"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 "
        >
          S
        </button>

        

      </div>
      
    </div>
     </div>
          
    </>
  )
}

export default Header;