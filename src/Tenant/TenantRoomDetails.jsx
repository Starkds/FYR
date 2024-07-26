import React from "react";

function TenantRoomDetails() {
  return (
    <>
      <form>
        <div className="w-screen h-fit  my-10   flex flex-col justify-center ">
          <div className=" flex items-center w-11/12   h-20  m-3 p-10    rounded-md   border-2 border-gray-500 border-solid ">
            <label className="flex w-80  flex-col text-2xl font-medium leading-5  text-gray-700">
              Personal address
            </label>
            <div className="mt-1 w-screen relative rounded-md shadow-sm">
              <input
           
                className="appearance-none  w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>

          <div className=" flex  items-center w-11/12  h-20  m-3 p-10   rounded-md   border-2 border-gray-500 border-solid">
            <label className="flex w-80  flex-col text-2xl font-medium leading-5  text-gray-700">
              Facilites
            </label>
            <div className="mt-1 w-screen  flex justify-between items-center  relative rounded-md shadow-sm">
              <ul className=" flex gap-2">
                <li>
                  <button className="w-fit h-9 p-4 bg-purple-100  font-semibold text-xl flex items-center justify-center rounded-lg  border-2 border-black ">
                    {" "}
                    balcony
                  </button>
                </li>
                <li>
                  <button className="w-fit h-9 p-4 bg-purple-100  font-semibold text-xl flex items-center justify-center rounded-lg  border-2 border-black ">
                    {" "}
                    park{" "}
                  </button>
                </li>
                <li>
                  <button className="w-fit h-9 p-4 bg-purple-100  font-semibold text-xl flex items-center justify-center rounded-lg  border-2 border-black ">
                    {" "}
                    main road connect
                  </button>
                </li>
                <li>
                  <button className="w-fit h-9 p-4 bg-purple-100  font-semibold text-xl flex items-center justify-center rounded-lg  border-2 border-black ">
                    {" "}
                    terrace
                  </button>
                </li>
                <li>
                  <button className="w-fit h-9 p-4 bg-purple-100  font-semibold text-xl flex items-center justify-center rounded-lg  border-2 border-black ">
                    {" "}
                    market
                  </button>
                </li>
              </ul>

              <button className="w-40  h-10 p-4 bg-stone-400  font-semibold text-xl flex items-center justify-center rounded-lg  border-2 border-black">
                {" "}
                Submit
              </button>
            </div>
          </div>

          <div className=" flex items-center w-11/12  h-20  m-3 p-10    rounded-md   border-2 border-gray-500 border-solid">
            <label className="flex w-80  flex-col text-2xl font-medium leading-5  text-gray-700">
              {" "}
              Restrictions
            </label>

            <div className="mt-1 w-screen  flex justify-between items-center  relative rounded-md shadow-sm">
              <ul className=" flex gap-2">
                <li>
                  <button className="w-fit h-9 p-4 bg-purple-100  font-semibold text-xl flex items-center justify-center rounded-lg  border-2 border-black ">
                    {" "}
                    No personal gate
                  </button>
                </li>
                <li>
                  <button className="w-fit h-9 p-4 bg-purple-100  font-semibold text-xl flex items-center justify-center rounded-lg  border-2 border-black ">
                    No late entry
                  </button>
                </li>
                <li>
                  <button className="w-fit h-9 p-4 bg-purple-100  font-semibold text-xl flex items-center justify-center rounded-lg  border-2 border-black ">
                    {" "}
                    No personal gate
                  </button>
                </li>
              </ul>

              <button className="w-40  h-10 p-4 bg-stone-400  font-semibold text-xl flex items-center justify-center rounded-lg  border-2 border-black">
                {" "}
                Submit
              </button>
            </div>
          </div>

          <div className=" flex items-center w-11/12  h-20  m-3 p-10   rounded-md   border-2 border-gray-500 border-solid">
            <label className="flex w-96  flex-col text-2xl font-medium leading-5  text-gray-700">
              Upload Images of your house
            </label>
             <div className=""> 
             <button className="w-40  h-10 p-4 bg-stone-400  font-semibold text-xl flex items-center justify-center rounded-lg  border-2 border-black">
                {" "}
               Upload
              </button>
             </div>
             
          </div>

          <div className=" flex items-center w-11/12  h-20  m-3 p-10    rounded-md   border-2 border-gray-500 border-solid">
            <label className="flex w-96  flex-col text-2xl font-medium leading-5  text-gray-700">
              Upload Videos of your house
            </label>
             <div className=""> 
             <button className="w-40  h-10 p-4 bg-stone-400  font-semibold text-xl flex items-center justify-center rounded-lg  border-2 border-black">
                {" "}
               Upload
              </button>
             </div>
             
          </div>
       <div className="w-screen flex justify-center">

       <button
      className="block w-2/4 select-none rounded-lg bg-gray-900 py-3.5 px-20 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button">
      Submit
    </button>
       </div>
       
       
        </div>

       
      </form>
    </>
  );
}

export default TenantRoomDetails;
