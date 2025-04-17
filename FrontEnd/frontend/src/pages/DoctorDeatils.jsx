import React, { useContext, useState } from 'react'
import { Appcontext } from '../Store/Appcontext'
import { useParams } from 'react-router-dom'


import { DoctorAbout } from './DoctorAbout'
import { Feedback } from './feedback'
import { SidePannel } from '../components/SidePannel'

export const DoctorDeatils = () => {
  const{doctors}=useContext(Appcontext)
   const params=useParams()
 console.log(params,"thisis paramse")
  console.log(doctors ,"this si detauls docotr ")
  const[tab,setTab]=useState("about")
   
  const doctor=doctors.find((doc)=>doc._id===params.id)
  console.log(doctor,"this is true or false")
  if(!doctor)
  {
    return <p className='text-red-500 p-4'>Loading doctor details...</p>
  }
  return (
    <>
  
    <div className='flex flex-col gap-4 md:gap-20 md:flex-row '>

   
    <div className='flex gap-4 mt-7'>
        <div>
          <img className='w-[150px] bg-indigo-300' src={doctor.photo} alt="" />

        </div>
        <div className='leading-10' >
            <h4 className='bg-[#BFE8EA] text-[#55D4E8] w-[200px] text-center'>{doctor.specialization}</h4>
            <h2 className='font-semibold'> Dr {doctor.name} </h2>
            <p>{doctor.bio}</p>
        </div>

    </div>
        <div className=''>
          <SidePannel doctorID={doctor._id} timeslots={doctor.timeslots} ticketPrice={doctor.ticketPrice} />
        </div>
    </div>

      <div className='border-b border-solid mt-3    w-[300px] md:w-[400px] flex items-center gap-5 md:gap-12'>
       <button onClick={()=>setTab("about")} className={` ${tab=="about"  ? "border-b border-indigo-500 font-semibold" : ""} font-semibold cursor-pointer py-6`}>About</button>
       <button onClick={()=>setTab("feedback")} className={`  ${tab=="feedback"  ? "border-b border-indigo-500 font-semibold" : ""} font-semibold cursor-pointer py-6 `}>Fedback</button>
      </div>
      <div className='mt-7'>
         {
            tab=="about" ? <DoctorAbout name={doctor.name} Experiense={doctor.Experiense} qualificationStartingDate={doctor.qualificationStartingDate} qualificationEndingDate={doctor.qualificationEndingDate} qualificationDegree={doctor.qualificationDegree} qualificationUniversity={doctor.qualificationUniversity} about={doctor.about}/>
             : <Feedback Reviews={doctor.Reviews} totalrating={doctor.totalrating} AvgRating={doctor.AvgRating}/>
         }
      </div>

      </>
  )
}
