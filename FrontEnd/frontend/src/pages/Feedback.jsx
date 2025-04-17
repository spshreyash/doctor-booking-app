import React, { useEffect, useState } from 'react'
import { formatDate } from '../utils/formatdate'

import { MdOutlineStar } from "react-icons/md";
import { Feedbackform } from './Feedbackform';
import { BASE_URL } from '../utils/config';
export const Feedback = ({Reviews,totalrating,AvgRating}) => {

    console.log(Reviews," this fullsdsdds")
    // console.log(totalrating)
     const[showfeed,setfeed]=useState(false)
     console.log(showfeed," this is show fedd ok i and obesrve care")
     const totalrating1=Reviews.length
   
   

  return (
   <>
     <div className=''>
      <h1 className='font-semibold'>All reviews({totalrating1})</h1>
    
    {
    Reviews && Reviews.slice(0,5).map((Reviews,index)=>{

    return <div key={index} className='flex gap-3 items-center'>
  <div className='flex  gap-4 mt-3'>
     {/* <img className=' w-[50px] h-[50px]  sm:w-[50px] rounded-full'  alt="" /> */}
     <div className='flex flex-col'>

     {/* <h3>{Reviews.user.name}</h3> */}
     <h4>{formatDate(Reviews.createdAt)}</h4>
     <p className=''>{Reviews.reviewText}</p>
     </div>
  </div>
    <div className='flex gap-1 pr-3 mt-1.5'>

     {[...Array(Reviews.rating).keys()].map((ele,index)=>{
     return  <MdOutlineStar key={index}  color='blue'/>
     })}
    </div>
      </div>
    })
  }
       

     { !showfeed && <div className='mt-3.5'>
        <button onClick={()=>setfeed(true)} className='bg-indigo-500 px-3 py-1 rounded-xl text-white'>Give feedback</button>
     </div>}
     </div>
      {
        showfeed && <Feedbackform  showfeed={showfeed} setfeed={setfeed} />
      }
   </>
  )
}
