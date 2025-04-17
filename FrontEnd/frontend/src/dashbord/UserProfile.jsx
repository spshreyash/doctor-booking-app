import React, { useContext, useState } from 'react'
import user from "../assets/vector.jpg"
import { AuthContext } from '../Store/AuthContext'
import { MyBooking } from '../components/MyBooking'
import { ProfileSetting } from '../components/ProfileSetting'
import {useFetchData} from "../Hook/useFetchData"
import { BASE_URL } from '../utils/config'
import { Loading } from '../pages/Loading'
import { useNavigate } from 'react-router-dom'; 
import { toast } from 'react-toastify'
export const UserProfile = () => {

   const{dispatch}=useContext(AuthContext)
   const[tab,setTab]=useState("ProfileSetting")
   
   const navigate=useNavigate()
   const{data,loading,error}=useFetchData(`${BASE_URL}/user/profile/me`)


   
    const handlelogout = async () => {
      try {
        // Make a direct API call (not using hook)
        const res = await fetch(`${BASE_URL}/user/logout`, {
          method: 'POST',
          credentials: 'include', 
        });
          // console.log(res,"form logout ")
        if (!res.ok) {
          toast.error("logout failed")
          throw new Error('Logout failed');
        }
    
          toast.success(' you are logout ')
        // Clear auth context
        dispatch({ type: 'LOGOUT' });
      
          

          navigate("/"); 

      } catch (err) {
        console.error('Logout Error:', err);
      }
    };
    
       
    const handledelteAccount= async()=>
    {
         try {
            const res=await fetch(`${BASE_URL}/user/${data._id}`,{
              method:"delete",
              credentials:"include",
            })

             if(!res.ok)
             {
              toast.error("Delete Account  Failed")
          throw new Error('delete Account faild ');
             }
             
             toast.success("Delete Accout Done")
             dispatch({ type: 'LOGOUT' });
             navigate("/signup")

         } catch (err) {
          console.error('Logout Error:', err);
         }
    }
   

  //  const{data:userData,loading,error}=useFetchData(`${BASE_URL}/user/profile/me`)
  //  const{data,loading,error}=useFetchData(`${BASE_URL}/user/profile/me`)

   console.log(data,"userData userprofile ")
  return (
<>
{loading && <Loading/> }
  
{  !loading  && !error  &&  
   <div className='flex  justify-between flex-col md:px-36  gap-8 md:gap-0 md:flex-row '>
    <div className='flex flex-col items-center   md:items-start leading-6 md:leading-8 mt-4 '>
      <img className='w-[70px] h-[70px] object-center object-cover overflow-hidden p-1.5 rounded-full' src={user} alt="" />
      <h4 className='font-semibold '>{data.name}</h4>
      <h4 className='font-extralight text-slate-600'>{data.email}</h4>
      <p className='font-extralight text-slate-600'> Boold Type : {data.bloodType} <span className='font-semibold text-black'></span></p>

      <div className='flex flex-col text-center mt-7 pt-2 md:mt-15 gap-4 '>
        <button onClick={handlelogout} className='w-[200px] bg-slate-900 py-2 text-white tracking-wider cursor-pointer rounded-md'>logout</button>
        <button  onClick={handledelteAccount}  className='w-[200px] bg-red-500 py-2 text-white tracking-wider cursor-pointer rounded-md'>Delete Account</button>
      </div>
    </div>

    <div>


    <div className='px-4 md:mt-7 flex  gap-6  '>
       <button onClick={()=>setTab("MyBooking")} className={` ${tab==="MyBooking" ? "bg-blue-500 text-white" : "bg-white" } border-2 w-[200px] h-10 px-5 py-2 text-center  cursor-pointer font-semibold rounded-md border-indigo-400`}>My Booking</button>
       <button  onClick={()=>setTab("ProfileSetting")} className={` ${tab==="ProfileSetting" ? "bg-blue-500 text-white" : "bg-white"} border-2 w-[200px] h-10  text-center cursor-pointer font-semibold rounded-md border-indigo-400`}>Profile Setting</button>
  
    

    </div>
    <div>
    {
       tab=== "MyBooking" && <MyBooking/>
    }
    {
      tab=== "ProfileSetting" && <ProfileSetting data={data}/>
    } 
    </div>
   
    </div>
  
    </div>
}
  </>
  )
}
