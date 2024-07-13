import React from 'react'


function Navbar() {
  return (
    <nav className="w-screen flex  h-16    flex-col  items-center"  >
      <div className="w-11/12 flex flex-row h-20 justify-between items-center  " >
        <div className="">
          <img className="h-18 w-28" src="./images/Company-logo.png" />
        </div>
        <div className="w-82 flex flex-row  items-center justify-between   ">
          <ul className=" w-80  justify-around flex flex-row  col-gap-3 text-lg font-semibold  ">
            <li>
              Home
            </li>
            <li>
              About
            </li>
            <li>
              Contact
            </li>
          </ul>
        </div>

        <div className="flex  gap-10 w-50 text-lg">

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 border border-red-400 rounded">login</button>



          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 border border-red-400 rounded" >Become a Tenant</button>

        </div>

      </div>


    </nav>
  )
}

export default Navbar