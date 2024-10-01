// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import { IoReorderThreeOutline } from "react-icons/io5";

// function Navbar() {
//   return (
//     <div className='fixed z-20  bg-stone-300     '>
// <nav className="w-screen flex  h-20     flex-col  items-center"  >
//       <div className="w-11/12 flex flex-row h-20 justify-between items-center  " >
//         <div className="">
//           <img className="h-18 w-28" src="./images/Company-logo.png" />
//         </div>
//         <div className="w-82 flex flex-row   items-center justify-between   ">
//           <ul className=" w-80  justify-around flex flex-row  col-gap-3 text-lg font-semibold  ">
//             <li>
//              <NavLink to='/'> Home</NavLink> 
//             </li>
//             <li>
//               <NavLink to='/About'> About us</NavLink>
//             </li>
//             <li>
//             <NavLink to='/Contact'>Contact</NavLink>  
//             </li>
//           </ul>
//         </div>

//         <div className="flex  gap-10 w-50 text-lg">
// <Link to="/Login">
// <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 border border-red-400 rounded"  >login</button>

// </Link>
          

// <Link to="/Tenantform">
// <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 border border-red-400 rounded" >Become a Tenant</button>

// </Link>
        
//         </div>

//       </div>


//     </nav>
//     </div>
    
//   )
// }

// export default Navbar


//beta version

// import React, { useState } from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import { IoReorderThreeOutline } from "react-icons/io5";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false); // State to track the toggle status

//   const toggleMenu = () => {
//     setIsOpen(!isOpen); // Toggle menu visibility
//   }

//   return (
//     <div className='fixed z-20 bg-stone-300 w-full'>
//       <nav className="w-full flex h-20 items-center justify-between px-4">
//         {/* Company Logo */}
//         <div className="">
//           <img className="h-16 w-24" src="./images/Company-logo.png" alt="Company Logo" />
//         </div>

//         {/* Toggler for mobile screens */}
//         <div className="md:hidden">
//           <IoReorderThreeOutline size={30} onClick={toggleMenu} className="cursor-pointer" />
//         </div>

//         {/* Navigation Links & Buttons for larger screens */}
//         <div className="hidden md:flex md:w-82 md:items-center md:justify-between">
//           <ul className="flex flex-row justify-around gap-3 text-base md:text-lg font-semibold">
//             <li>
//               <NavLink to='/'>Home</NavLink>
//             </li>
//             <li>
//               <NavLink to='/About'>About us</NavLink>
//             </li>
//             <li>
//               <NavLink to='/Contact'>Contact</NavLink>
//             </li>
//           </ul>
//           <div className="flex gap-4 lg:gap-10">
//             <Link to="/Login">
//               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 lg:px-4 border border-red-400 rounded">Login</button>
//             </Link>
//             <Link to="/Tenantform">
//               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 lg:px-4 border border-red-400 rounded">Rent Now</button>
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Dropdown Menu for mobile/tablet */}
//       <div className={`${isOpen ? 'block' : 'hidden'} md:hidden w-full bg-stone-300`}>
//         {/* Stack the login and tenant buttons at the top of the dropdown */}
//         <div className="flex flex-col items-center gap-3 py-4">
//           <Link to="/Login">
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 border border-red-400 rounded w-10/12">Login</button>
//           </Link>
//           <Link to="/Tenantform">
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 border border-red-400 rounded w-10/12">Rent Now</button>
//           </Link>

//           {/* Navigation Links */}
//           <ul className="flex flex-col items-center gap-4 text-base font-semibold">
//             <li>
//               <NavLink to='/'>Home</NavLink>
//             </li>
//             <li>
//               <NavLink to='/About'>About us</NavLink>
//             </li>
//             <li>
//               <NavLink to='/Contact'>Contact</NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar;





import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoReorderThreeOutline } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  }

  const handleItemClick = () => {
    setIsOpen(false); // Close the dropdown when an item is clicked
  }

  return (
    <div className='fixed z-20 bg-stone-300 w-full'>
      <nav className="w-full flex h-20 items-center justify-between px-4">
        <div className="flex items-center">
          <img className="h-16 w-24 md:h-20 md:w-28" src="./images/Company-logo.png" alt="Company Logo" />
        </div>

        <div className="md:hidden">
          <IoReorderThreeOutline
            size={30}
            onClick={toggleMenu}
            className={`cursor-pointer transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>

        <div className={`hidden md:flex md:w-full md:items-center md:justify-between`}>
          <ul className="flex flex-row justify-center gap-3 text-base md:text-lg font-semibold flex-grow">
            <li>
              <NavLink to='/' onClick={handleItemClick}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/About' onClick={handleItemClick}>About us</NavLink>
            </li>
            <li>
              <NavLink to='/Contact' onClick={handleItemClick}>Contact</NavLink>
            </li>
          </ul>

          <div className="flex gap-4 lg:gap-10">
            <Link to="/Login" onClick={handleItemClick}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-red-400 rounded">Login</button>
            </Link>
            <Link to="/Tenantform" onClick={handleItemClick}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-red-400 rounded">Rent Now</button>
            </Link>
          </div>
        </div>
      </nav>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden w-full bg-stone-300`}>
        <div className="flex flex-col items-end gap-3 py-4 pr-4">
          <Link to="/Login" onClick={handleItemClick}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-red-400 rounded w-full max-w-xs">Login</button>
          </Link>
          <Link to="/Tenantform" onClick={handleItemClick}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-red-400 rounded w-full max-w-xs whitespace-nowrap">Rent Now</button>
          </Link>

          <ul className="flex flex-col items-end gap-4 text-base font-semibold pr-2">
            <li>
              <NavLink to='/' onClick={handleItemClick}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/About' onClick={handleItemClick}>About us</NavLink>
            </li>
            <li>
              <NavLink to='/Contact' onClick={handleItemClick}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
