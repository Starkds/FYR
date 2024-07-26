import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
function Tenantform() {
    const [name , setName] = useState('');
    const [number , setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [area , setArea] = useState('');
    const [city , setCity] = useState('');
    const [state , setState] = useState('');
    const [post , setPost] =  useState('');
    

  return (
    <>
    <div className="flex items-center justify-center p-12">
   
    <div className="mx-auto w-full max-w-[550px] bg-white  border-2  p-10 rounded-sm  border-solid border-black">
        <form>
            <div className="mb-5">
                <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
                    Full Name
                </label>
                <input type="text"   onChange={(e) =>{ setName(e.target.name)}}  value={name} name="name" id="name" placeholder="Full Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className="mb-5">
                <label for="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                    Phone Number
                </label>
                <input type="text"  onChange={(e) =>{ setNumber(e.target.value)}}  value={number}  name="phone" id="phone" placeholder="Enter your phone number"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className="mb-5">
                <label for="email" className="mb-3 block text-base font-medium text-[#07074D]">
                    Email Address
                </label>
                <input type="email"  onChange={(e) =>{ setEmail(e.target.value)}}  value={email} name="email" id="email" placeholder="Enter your email"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
          
            <div className="mb-5" >
            <label for="password" className="b-3 block text-base font-medium text-[#07074D]">
                Password
                </label>
                             
                        <input id="password" onChange={(e) => { setPassword(e.target.value)}} value={password} name="password" type="password" required="" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
        
            </div>

            <div className="mb-5 pt-3">
                <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                    Address Details
                </label>
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input type="text" name="area" id="area" placeholder="Enter area"   onChange={(e) => { setArea(e.target.value)}} value={area}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input type="text" name="city" id="city" placeholder="Enter city"   onChange={(e) => { setCity(e.target.value)}} value={city}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input type="text" name="state" id="state" placeholder="Enter state"    onChange={(e) => { setState(e.target.value)}} value={state}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input type="text" name="post-code" id="post-code" placeholder="Post Code"   onChange={(e) => { setPost(e.target.value)}} value={post}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                </div>
            </div>

            <div>
             <Link to= '/TenantRoomDetails'>
             <button
                    className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Submit
                </button>
             </Link>   
            </div>
        </form>
    </div>
</div>
    </>
  )
}

export default Tenantform