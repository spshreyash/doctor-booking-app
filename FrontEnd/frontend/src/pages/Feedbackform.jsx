


import React, { useContext, useState } from 'react'
import { MdOutlineStar } from "react-icons/md";
import { Appcontext } from '../Store/Appcontext';
import { BASE_URL } from '../utils/config';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

import { Loading } from './Loading';

export const Feedbackform = ({setfeed,showfeed}) => {
  const [rating, setRating] = useState(0);

  const[reviews,setReviws]=useState(null)
   const[loading,setloading]=useState(false)

   const{id}=useParams()
  console.log(id)
  const handleform= async(e)=>
  {
    e.preventDefault()
    setloading(true)
    try {
        if(!rating || !reviews)
        {
            setloading(false)
            // setfeed(false); 
            toast.error('Rating and Reviews filed are required')

        }
       const res=await fetch(`${BASE_URL}/doctor/${id}/reviewe`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        credentials:"include",
        body: JSON.stringify({
          rating,
          reviewText: reviews,  
          doctor: id,
          
          
        })
       })

       console.log(res)
       const result= await res.json()
       console.log(result,"thisis result ")
        if(res.ok)
        {
          setloading(false)
          // setfeed(prev => [result.data, ...prev]);
          //  setfeed((showfeed)=>[result.data, ...showfeed])
             toast.success(result.msg)
        }
        else{
           throw new Error('not autherized to do this ')
        }

      
    } catch (err) {
      setloading(false)
      console.log(err)
      toast.error('not autherized to do this')
      
    }
     console.log(rating)
     console.log(reviews)

     if(rating>=1)
     {
        setfeed(false)
     }
  } 

  return (
    <>
    <form action=""  onSubmit={handleform}>

  
      <div className='mt-3.5'>
        <h4>How was your overall experience?</h4>
        <div className='flex gap-1 mt-2'>
          {[...Array(5)].map((_, index) => (
            <MdOutlineStar
              key={index}
              onClick={() => setRating(index + 1)}
              className={`cursor-pointer ${rating >= index + 1 ? "text-yellow-400" : "text-gray-400"}`}
              size={15}
            />
          ))}
        </div>

         <div>
            <h3>share your feedback or suggetion </h3>
         </div>
         <textarea onChange={(e)=>setReviws(e.target.value)} className='border mt-2.5 mb-2.5 border-solid border-black sm:w-xl px-2.5 py-2  w-[300px] resize-none h-[100px]'  name="" id="" placeholder='write something .. '></textarea>
      </div>

        <div><button type='submit' className='bg-indigo-400 px-1.5 py-1.5 rounded-md text-white'>{loading ? <Loading size={25}  /> : "submit now"}</button></div>
      </form>
    </>
  );
};
