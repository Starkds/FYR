// import React from "react";

// function TenantRoomDetails() {
//   return (
//     <>
//       <form>
//         <div className="w-screen h-fit  my-10   flex flex-col justify-center ">
//           <div className=" flex items-center w-11/12   h-20  m-3 p-10    rounded-md   border-2 border-gray-500 border-solid ">
//             <label className="flex w-80  flex-col text-2xl font-medium leading-5  text-gray-700">
//               Personal address
//             </label>
//             <div className="mt-1 w-screen relative rounded-md shadow-sm">
//               <input
           
//                 className="appearance-none  w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
//               />
//             </div>
//           </div>

//           <div className=" flex  items-center w-11/12  h-20  m-3 p-10   rounded-md   border-2 border-gray-500 border-solid">
//             <label className="flex w-80  flex-col text-2xl font-medium leading-5  text-gray-700">
//               Facilites
//             </label>
//             <div className="mt-1 w-screen  flex justify-between items-center  relative rounded-md shadow-sm">
//               <ul className=" flex gap-2">
//                 <li>
//                   <button className="w-fit h-9 p-4 bg-purple-100  font-semibold text-xl flex items-center justify-center rounded-lg  border-2 border-black ">
//                     {" "}
//                     balcony
//                   </button>
//                 </li>
//                 <li>
//                   <button className="w-fit h-9 p-4 bg-purple-100  font-semibold text-xl flex items-center justify-center rounded-lg  border-2 border-black ">
//                     {" "}
//                     park{" "}
//                   </button>
//                 </li>
//                 <li>
//                   <button className="w-fit h-9 p-4 bg-purple-100  font-semibold text-xl flex items-center justify-center rounded-lg  border-2 border-black ">
//                     {" "}
//                     main road connect
//                   </button>
//                 </li>
//                 <li>
//                   <button className="w-fit h-9 p-4 bg-purple-100  font-semibold text-xl flex items-center justify-center rounded-lg  border-2 border-black ">
//                     {" "}
//                     terrace
//                   </button>
//                 </li>
//                 <li>
//                   <button className="w-fit h-9 p-4 bg-purple-100  font-semibold text-xl flex items-center justify-center rounded-lg  border-2 border-black ">
//                     {" "}
//                     market
//                   </button>
//                 </li>
//               </ul>

//               <button className="w-40  h-10 p-4 bg-stone-400  font-semibold text-xl flex items-center justify-center rounded-lg  border-2 border-black">
//                 {" "}
//                 Submit
//               </button>
//             </div>
//           </div>

//           <div className=" flex items-center w-11/12  h-20  m-3 p-10    rounded-md   border-2 border-gray-500 border-solid">
//             <label className="flex w-80  flex-col text-2xl font-medium leading-5  text-gray-700">
//               {" "}
//               Restrictions
//             </label>

//             <div className="mt-1 w-screen  flex justify-between items-center  relative rounded-md shadow-sm">
//               <ul className=" flex gap-2">
//                 <li>
//                   <button className="w-fit h-9 p-4 bg-purple-100  font-semibold text-xl flex items-center justify-center rounded-lg  border-2 border-black ">
//                     {" "}
//                     No personal gate
//                   </button>
//                 </li>
//                 <li>
//                   <button className="w-fit h-9 p-4 bg-purple-100  font-semibold text-xl flex items-center justify-center rounded-lg  border-2 border-black ">
//                     No late entry
//                   </button>
//                 </li>
//                 <li>
//                   <button className="w-fit h-9 p-4 bg-purple-100  font-semibold text-xl flex items-center justify-center rounded-lg  border-2 border-black ">
//                     {" "}
//                     No personal gate
//                   </button>
//                 </li>
//               </ul>

//               <button className="w-40  h-10 p-4 bg-stone-400  font-semibold text-xl flex items-center justify-center rounded-lg  border-2 border-black">
//                 {" "}
//                 Submit
//               </button>
//             </div>
//           </div>

//           <div className=" flex items-center w-11/12  h-20  m-3 p-10   rounded-md   border-2 border-gray-500 border-solid">
//             <label className="flex w-96  flex-col text-2xl font-medium leading-5  text-gray-700">
//               Upload Images of your house
//             </label>
//              <div className=""> 
//              <button className="w-40  h-10 p-4 bg-stone-400  font-semibold text-xl flex items-center justify-center rounded-lg  border-2 border-black">
//                 {" "}
//                Upload
//               </button>
//              </div>
             
//           </div>

//           <div className=" flex items-center w-11/12  h-20  m-3 p-10    rounded-md   border-2 border-gray-500 border-solid">
//             <label className="flex w-96  flex-col text-2xl font-medium leading-5  text-gray-700">
//               Upload Videos of your house
//             </label>
//              <div className=""> 
//              <button className="w-40  h-10 p-4 bg-stone-400  font-semibold text-xl flex items-center justify-center rounded-lg  border-2 border-black">
//                 {" "}
//                Upload
//               </button>
//              </div>
             
//           </div>
//        <div className="w-screen flex justify-center">

//        <button
//       className="block w-2/4 select-none rounded-lg bg-gray-900 py-3.5 px-20 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//       type="button">
//       Submit
//     </button>
//        </div>
       
       
//         </div>

       
//       </form>
//     </>
//   );
// }

// export default TenantRoomDetails;



//beta version



import React, { useState } from "react";

function TenantRoomDetails() {
  // State to track the checked facilities and restrictions
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [selectedRestrictions, setSelectedRestrictions] = useState([]);

  // Toggle checkbox selection for facilities
  const handleFacilityChange = (facility) => {
    setSelectedFacilities((prev) =>
      prev.includes(facility)
        ? prev.filter((item) => item !== facility)
        : [...prev, facility]
    );
  };

  // Toggle checkbox selection for restrictions
  const handleRestrictionChange = (restriction) => {
    setSelectedRestrictions((prev) =>
      prev.includes(restriction)
        ? prev.filter((item) => item !== restriction)
        : [...prev, restriction]
    );
  };

  return (
    <>
      <form>
        <div className="w-screen h-fit mt-24 mb-16 flex flex-col justify-center">
          {/* Personal Address Input */}
          <div className="flex items-center w-11/12 h-20 m-3 p-6 rounded-md border-2 border-gray-300 shadow-lg bg-white">
            <label className="flex w-80 flex-col text-2xl font-semibold leading-5 text-gray-800">
              Personal Address
            </label>
            <input
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              placeholder="Enter your address"
            />
          </div>

          {/* Facilities Section */}
          <div className="flex items-center w-11/12 h-auto m-3 p-6 rounded-md border-2 border-gray-300 shadow-lg bg-white">
            <label className="flex w-80 flex-col text-2xl font-semibold leading-5 text-gray-800">
              Facilities
            </label>
            <div className="mt-1 flex flex-wrap justify-between items-center w-full">
              <ul className="flex flex-wrap gap-2">
                {["Balcony", "Park", "Main Road Connect", "Terrace", "Market"].map((facility) => (
                  <li key={facility}>
                    <label
                      className={`flex items-center gap-2 p-2 rounded-lg border-2 transition-all duration-150 ease-in-out ${
                        selectedFacilities.includes(facility)
                          ? "bg-purple-300 border-purple-600"
                          : "bg-purple-200 border-purple-600"
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4"
                        checked={selectedFacilities.includes(facility)}
                        onChange={() => handleFacilityChange(facility)}
                      />
                      <span className="text-lg font-semibold">{facility}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Restrictions Section */}
          <div className="flex items-center w-11/12 h-auto m-3 p-6 rounded-md border-2 border-gray-300 shadow-lg bg-white">
            <label className="flex w-80 flex-col text-2xl font-semibold leading-5 text-gray-800">
              Restrictions
            </label>
            <div className="mt-1 flex flex-wrap justify-between items-center w-full">
              <ul className="flex flex-wrap gap-2">
                {["No Personal Gate", "No Late Entry"].map((restriction) => (
                  <li key={restriction}>
                    <label
                      className={`flex items-center gap-2 p-2 rounded-lg border-2 transition-all duration-150 ease-in-out ${
                        selectedRestrictions.includes(restriction)
                          ? "bg-purple-300 border-purple-600"
                          : "bg-purple-200 border-purple-600"
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4"
                        checked={selectedRestrictions.includes(restriction)}
                        onChange={() => handleRestrictionChange(restriction)}
                      />
                      <span className="text-lg font-semibold">{restriction}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Upload Images Section */}
          <div className="flex items-center w-11/12 h-auto m-3 p-6 rounded-md border-2 border-gray-300 shadow-lg bg-white">
            <label className="flex w-96 flex-col text-2xl font-semibold leading-5 text-gray-800">
              Upload Images of Your House
            </label>
            <div>
              <button className="w-40 h-10 p-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg flex items-center justify-center rounded-lg border-2 border-blue-700 transition-all duration-150 ease-in-out">
                Upload
              </button>
            </div>
          </div>

          {/* Upload Videos Section */}
          <div className="flex items-center w-11/12 h-auto m-3 p-6 rounded-md border-2 border-gray-300 shadow-lg bg-white">
            <label className="flex w-96 flex-col text-2xl font-semibold leading-5 text-gray-800">
              Upload Videos of Your House
            </label>
            <div>
              <button className="w-40 h-10 p-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg flex items-center justify-center rounded-lg border-2 border-blue-700 transition-all duration-150 ease-in-out">
                Upload
              </button>
            </div>
          </div>

          {/* Final Submit Button */}
          <div className="w-screen flex justify-center">
            <button
              className="block w-1/2 select-none rounded-lg bg-green-600 hover:bg-green-700 py-3.5 px-20 text-center font-sans text-lg font-bold uppercase text-white shadow-md transition-all duration-150 ease-in-out"
              type="button"
            >
              Submit All
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default TenantRoomDetails;

