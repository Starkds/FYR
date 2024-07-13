import React from 'react'
import { RiMapPinLine } from "react-icons/ri";
function Header() {
  return (
    <>
     <div>
     <div className="max-w-md mx-auto">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
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
          Search
        </button>

        

      </div>
      
    </div>

  
     </div>
    </>
  )
}

export default Header;