import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'

import { Appcontext} from '../Store/Appcontext'
export const DoctorAllList = () => {
 const navigate=useNavigate()
 const {doctors}=useContext(Appcontext)

  return (
    <div className='flax flex-col items-center p-6 gap-4 text-gray-900 mt-2'>
     <h1 className='text-center font-semibold text-3xl sm:text-4xl '>All Doctors </h1>
     <p  className='text-center mt-2  tracking-wider'>Simply browse through our extensive list of trusted doctors.</p>
     <div className='flex flex-col gap-8 flex-wrap sm:flex-row  items-center justify-center mt-7' >
     {   doctors.map((itams,index)=>
     {
        return  <div key={index} onClick={()=>navigate(`/doctors/${itams._id}`)}  className=' border-2 border-blue-100 rounded-md mb-2.5 pb-2 transition-all hover:translate-y-[-12px] duration-500 cursor-pointer' >

<img className='bg-blue-100 w-[200px] h-auto px-4 py-4 ' src={itams.photo} alt="" />
             <div className=' p-2.5'>
                <p className='text-green-500'>Avalible</p>
             <p>{itams.name}</p>
             <p>{itams.specialization}</p>
             </div>
        </div>
     })

     }
     </div>
     {/* <div className='w-full flex justify-center'>
        <button onClick={()=>{
         navigate("/doctors");
         scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }} 
        className='px-5 py-2 rounded-full  m- text-center bg-blue-100 cursor-pointer   mt-3 '>
            more
        </button>
     </div> */}

    </div>
  )
}
