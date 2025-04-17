import React, { useState } from 'react'
import { useFetchData } from '../Hook/useFetchData'
import { BASE_URL } from '../utils/config'
import { Loading } from '../pages/Loading'
import { Tabs } from './Tabs'
import { DoctorAbout } from '../pages/DoctorAbout'
import {  DoctroFullProfile   } from './DoctroFullProfile'
import { Appointment } from './Appointment'


export const DoctorProfile = () => {

  const{data,loading,error}=useFetchData(`${BASE_URL}/doctor/profile/me`)

  console.log(data,"this is approved data ")
   const[tab,setTab]=useState('OverViewe')

  return (
 <>
   <div>

  
   <div className='flex  gap-6 md:flex-row flex-col'>

    {loading && <Loading/>}
    {!loading && ( 
    <>
      <div>

      <Tabs tab={tab} setTab={setTab} />
      </div>


   <div className=' flex-col flex'>

   
      { data &&  data.isApproved === "pending" && (
        <div className=" w-full h-[50px]  font-semibold  px-1.5 py-1 bg-yellow-100 p-2 mt-4 rounded">
          <p>to Approvel pls complete the details and with in the  48 hrs our team  will call u  .</p>
        </div>
         
        
        )}

<div className='mt-3.5'>
          {tab==="OverViewe" &&  (<div>

            {tab === "OverViewe" && (
  <div className='p-4 md:p-8'>

    <div className='flex flex-col md:flex-row gap-6 md:gap-10'>

      <img className='w-[250px] h-[250px] bg-indigo-500 rounded-md self-center md:self-start' src={data.photo} alt="" />

      <div>
        <div className='flex flex-col'>

          <span className='h-10 w-[150px] rounded-md bg-indigo-500 px-3 py-2 text-white text-center'>
            {data.specialization}
          </span>

          {/* <span>{data.AvgRating} </span>
          <span>{data.totalrating} </span> */}

          <p className='mt-2 text-sm text-gray-700'>{data.bio}</p>
        </div>

        <p className='mt-3 font-medium text-gray-800'> Name: {data.name}</p>

        <div>
          <DoctorAbout
            name={data.name}
            about={data.about}
            qualificationEndingDate={data.qualificationEndingDate}
            qualificationStartingDate={data.qualificationStartingDate}
            qualificationDegree={data.qualificationDegree}
            qualificationUniversity={data.qualificationUniversity}
            Experiense={data.Experiense}
          />
        </div>
      </div>

    </div>

  </div>
)}

          </div>)}
          {tab==="Appointment" &&  <div> <Appointment appointment={data.appointment}/> </div>}

          {tab==="Profile" &&  <div> <DoctroFullProfile doctordata={data} dataid={data._id} /> </div>}
          </div>
       </div>
     </>
  )}

   </div>

   
    


   </div>
 </>
  )
}
