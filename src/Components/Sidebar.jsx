import React from 'react'

function Sidebar() {
  return (
   <>

    <div className="overflow-hidden fixed  mt-10 h-screen shadow-lg border-t-4 bg-white mb-10 rounded-b-lg rounded-t border-red-light w-96    ">
      <div className="px-6 py-4 mt-10 mb-8">

        <div className='flex justify'>
        <div className="uppercase tracking-wide text-c2 mb-4">
        <label className='font-semibold '>Min price</label>
        <input className='border-2 border-solid  border-black w-40' list="options" name="option" id="optionInput" />
       <datalist id="options">
       <option value=">1000" />
       <option value="1500" />
       <option value="1600" />
      </datalist>
          </div>
    
          <div className="uppercase tracking-wide text-c2 mb-4">
        <label className='font-semibold'>Max price</label>
        <input className='border-2 border-solid  border-black w-40' list="options" name="option" id="optionInput" />
       <datalist id="options">
       <option value="  10000" />
       <option value="15000" />
       <option value="<16000" />
      </datalist>
          </div>


        </div>
      
        <div className="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-b-0" style={{ borderLeft: '4px solid #e2624b' }}>
          <div className="pl-2  gap-4 flex flex-col ">

            <label className='font-semibold'>Rental Type</label>
<div className='flex gap-2'>
<input  type="checkbox" id="1room" name="rentalType" value="1 room" />
<label  className=' border-solid  border-black w-16 h-7 rounded-sm'  htmlFor="1room">1 room</label>
<input type="checkbox" id="2bhk" name="rentalType" value="2 BHK" />
<label className=' border-solid  border-black w-16 h-7 rounded-sm' htmlFor="2bhk">2 BHK</label>
<input type="checkbox" id="3bhk" name="rentalType" value="3 BHK" />
<label className=' border-solid  border-black w-16 h-7 rounded-sm' htmlFor="3bhk">3 BHK</label>
</div>

            </div>
        </div>


        <div className="flex cursor-pointer border px-4 py-2 mt-4 text-lg text-grey-darkest border-b-0">
          <div className="pl-2 ">
          <label className='font-semibold'>Facilties</label>
<div className='flex gap-3 flex-row'>
<input  type="checkbox" id="1room" name="rentalType" value="1 room" />
<label  className=' border-solid  border-black w-16 h-7 rounded-sm'  htmlFor="1room">Balcony</label>
<input type="checkbox" id="2bhk" name="rentalType" value="2 BHK" />
<label className=' border-solid  border-black w-16 h-7 rounded-sm' htmlFor="2bhk">Park</label>
<input type="checkbox" id="3bhk" name="rentalType" value="3 BHK" />
<label className=' border-solid  border-black w-16 h-7 rounded-sm' htmlFor="3bhk">Gate</label>
</div>



          </div>
        </div>
       

        <div className="flex cursor-pointer border px-4 py-2 mt-4 text-lg text-grey-darkest border-b-0">
          <div className="pl-2 ">
          <label className='font-semibold'>No of person</label>
<div className='flex gap-3 flex-row'>
<input  type="checkbox" id="1room" name="rentalType" value="1 room" />
<label  className=' border-solid  border-black w-16 h-7 rounded-sm'  htmlFor="1room">Family</label>
<input type="checkbox" id="2bhk" name="rentalType" value="2 BHK" />
<label className=' border-solid  border-black w-16 h-7 rounded-sm' htmlFor="2bhk">friends</label>
</div>



          </div>
        </div>
       
       
      
        </div>
      
    </div>
  




    </>
  )
}

export default Sidebar 