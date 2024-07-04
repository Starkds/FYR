import React from 'react'


function Navbar() {
  return (
    <nav className="w-screen flex  h-screen   flex-col "  >
      <div className="w-screen flex flex-row h-screen justify-between  bg-green-400 items-center  " >
        <div className="">
          <img  className="h-6 w-8" src="./images/Company-logo.png" />
        </div>
        <div className="  ">
          <ul className="  ">
            <li className="">
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

        <div className="Search-bar">
       
            <button>login</button>
          

         
            <button>Become a Tenant</button>
          
        </div>

      </div>

      
    </nav>
  )
}

export default Navbar