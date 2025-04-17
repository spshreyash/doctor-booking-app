import React from 'react'
import { BASE_URL } from '../utils/config'
import { toast } from 'react-toastify'

export const SidePannel = ({doctorID,timeslots,ticketPrice}) => {

    // this is id of docotr 
    const id=doctorID
    console.log(doctorID," thisis form sidepannel")

    const bookinghandleer = async () => {
      try {
        const res = await fetch(`${BASE_URL}/bookings/checkout-session/${id}`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        const result = await res.json();
        console.log(result," this is funal page data")
    
        if (res.ok) {
          // if (result.session && result.session.url)
          if(result.session.url)
             {
            window.location.href = result.session.url;
          }
        } else {
          throw new Error(result.msg + ' Please try again');
        }
    
      } catch (err) {
        toast.error(err.message);
      }
    };
    
    return (
      <>
    <div className='shadow-md pt-2.5 md:mt-7 min-w-[200px] flex flex-col gap-4'>

     
   
    <div className='flex justify-between px-4 '>
        <h4>Ticket Price :</h4>
        <span> Rs-{ticketPrice} </span> 

    </div>
    <div className='mt-1.5 md:mt-3'>
        <p className='px-4'>Avalible Time Slot :</p>
        <ul className='leading-8 mt-3 tracking-wide'>
            {   timeslots && timeslots.length > 0 ?
        ( timeslots.map((ele,index)=>{
          return  <li key={index} className='flex justify-between px-6 md:px-4 md:gap-15 '>
            <p >{ele.day} : </p>
            <span className='font-extralight'>{ele.startTime}  -  {ele.endTime} </span>
        </li>
         })): <div> heyry </div>
           
           
}
        </ul>
        <div className='flex justify-center items-center mb-10 mt-5'>
            <button  onClick={bookinghandleer}  className=' bg-[#1C5AF9] text-white px-7 py-2 rounded-md cursor-pointer'>Book Appointment</button>
        </div>
    </div>
    </div>
    
    </>
  )
}
