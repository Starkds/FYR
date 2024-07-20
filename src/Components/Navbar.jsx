import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='fixed z-20  bg-stone-300     '>
<nav className="w-screen flex  h-20     flex-col  items-center"  >
      <div className="w-11/12 flex flex-row h-20 justify-between items-center  " >
        <div className="">
          <img className="h-18 w-28" src="./images/Company-logo.png" />
        </div>
        <div className="w-82 flex flex-row  items-center justify-between   ">
          <ul className=" w-80  justify-around flex flex-row  col-gap-3 text-lg font-semibold  ">
            <li>
             <NavLink to='/'> Home</NavLink> 
            </li>
            <li>
              <NavLink to='/About'> About us</NavLink>
            </li>
            <li>
            <NavLink to='/Contact'>Contact</NavLink>  
            </li>
          </ul>
        </div>

        <div className="flex  gap-10 w-50 text-lg">
<Link to="/Login">
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 border border-red-400 rounded"  >login</button>

</Link>
          

<Link to="/Tenantform">
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 border border-red-400 rounded" >Become a Tenant</button>

</Link>
        
        </div>

      </div>


    </nav>
    </div>
    
  )
}

export default Navbar