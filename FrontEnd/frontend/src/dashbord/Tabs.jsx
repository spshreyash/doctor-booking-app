import React, { useContext } from 'react'
import { AuthContext } from '../Store/AuthContext'
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../utils/config';
import { toast } from 'react-toastify';
export const Tabs = ({tab,setTab}) => {

    const navigate=useNavigate()
    const{user,dispatch}=useContext(AuthContext)

      // console.log(user," this use form the importhant ")
    
       
        const handlelogout = async () => {
          try {
            // Make a direct API call (not using hook)
            const res = await fetch(`${BASE_URL}/doctor/logout`, {
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
            const res=await fetch(`${BASE_URL}/doctor/${user._id}`,{
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

  return (
    <>
       <div className=''>
        <div className='shadow-md  bg-white md:w-[300px] px-7 rounded-md py-7 flex flex-col gap-4 mt-2 items-center md:gap-8 w-full'>
          <button onClick={()=>setTab('OverViewe')} className={` ${tab == "OverViewe" ? "bg-indigo-300 text-blue-600" : "bg-transparent text-slate-900"} py-2 px-9 rounded-md  cursor-pointer border-2 border-indigo-300 `}>OverViewe</button>
          <button onClick={()=>setTab('Appointment')} className={` ${tab == "Appointment" ? "bg-indigo-300 text-blue-600" : "bg-transparent text-slate-900"} py-2 px-8 rounded-md  cursor-pointer border-2 border-indigo-300`}>Appointment</button>
          <button onClick={()=>setTab('Profile')} className={` ${tab == "Profile" ? "bg-indigo-300 text-blue-600" : "bg-transparent text-slate-900"} py-2  px-13 rounded-md  cursor-pointer border-2 border-indigo-300`}>Profile</button>

          <div className='flex flex-col text-center mt-3 pt-2 md:mt-5  gap-4 '>
        <button onClick={handlelogout} className='w-[200px] bg-slate-900 py-2 text-white tracking-wider cursor-pointer rounded-md'>logout</button>
        <button onClick={handledelteAccount}  className='w-[200px] bg-red-500 py-2 text-white tracking-wider cursor-pointer rounded-md'>Delete Account</button>
      </div>


        </div>
       </div>
    </>
  )
}
