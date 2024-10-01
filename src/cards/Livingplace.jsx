// import React from 'react'
// import { Link } from 'react-router-dom'
// import Livingdetails from '../Components/Livingdetails'


// function Livingplace(props) {
//   return (
//     <Link to={Livingdetails}>
//    <div className="relative flex w-80 flex-col rounded-xl bg-gray-100 bg-clip-border text-gray-700 shadow-lg">
//   <div
//     className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
//     <img className='h-60 w-100'
//       src={props.img}
//       alt="ui/ux review check" />
//     <div
//       className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
//     </div>
//     <button
//       className="!absolute  top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//       type="button">
//       <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//           <path
//             d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z">
//           </path>
//         </svg>
//       </span>
//     </button>
//   </div>
//   <div className="p-6">
//     <div className="flex items-center justify-between mb-3">
//       <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
//         {props.name}
//       </h5>
//       <p
//         className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
//        {props.price}
       
//       </p>
//     </div>
    
//     <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
//       {props.description}
//     </p>
//     <div className="inline-flex flex-wrap items-center gap-2 mt-2 group">
//       <span
//         className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
//           <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
//           <path fill-rule="evenodd"
//             d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
//             clip-rule="evenodd"></path>
//           <path
//             d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z">
//           </path>
//         </svg>
//       </span>
   
//       <span
//         className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
//           <path
//             d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z">
//           </path>
//           <path
//             d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z">
//           </path>
//         </svg>
//       </span>
//       <span
//         className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
//           <path d="M19.5 6h-15v9h15V6z"></path>
//           <path fill-rule="evenodd"
//             d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z"
//             clip-rule="evenodd"></path>
//         </svg>
//       </span>
//       <span
//         className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
//           <path fill-rule="evenodd"
//             d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
//             clip-rule="evenodd"></path>
//         </svg>
//       </span>
//       <span
//         className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
//         +20
//       </span>
//     </div>
//   </div>
//   <div className="px-10  pb-2">
//   <Link to='/placeInfo'>
//   <button
//       className="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-20 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//       type="button">
//       Reserve
//     </button>
//   </Link>  
//   </div>
// </div> 
     
//     </Link>
//   )
// }

// export default Livingplace



//beta version

import React from 'react';
import { Link } from 'react-router-dom';
import Livingdetails from '../Components/Livingdetails';

function Livingplace(props) {
  return (
    <Link to={Livingdetails}>
      <div className="relative flex flex-col w-full max-w-[17rem] mx-auto rounded-xl bg-gray-100 bg-clip-border text-gray-700 shadow-lg md:max-w-[19rem] lg:max-w-[21rem]">
        <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img className="h-40 w-full object-cover md:h-48 lg:h-60" src={props.img} alt="ui/ux review check" />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
          <button
            className="absolute top-4 right-4 h-8 w-8 select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
              </svg>
            </span>
          </button>
        </div>
        <div className="p-4 md:p-6">
          <div className="flex items-center justify-between mb-2">
            <h5 className="block font-sans text-lg md:text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
              {props.name}
            </h5>
            <p className="flex items-center gap-1 font-sans text-sm md:text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
              {props.price}
            </p>
          </div>

          <p className="block font-sans text-sm md:text-base antialiased font-light leading-relaxed text-gray-700">
            {props.description}
          </p>
          <div className="inline-flex flex-wrap items-center gap-2 mt-2 group">
            {/* Icons here */}
          </div>
        </div>
        <div className="px-6 pb-2">
          <Link to='/placeInfo'>
            <button
              className="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-4 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20"
              type="button"
            >
              Reserve
            </button>
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default Livingplace;
