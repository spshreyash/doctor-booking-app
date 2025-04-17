import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import {AuthContext} from "../Store/AuthContext"
import {BASE_URL} from "../utils/config.js"
export const Login = () => {
  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")
  const navigate=useNavigate()
   const{dispatch}=useContext(AuthContext)

 const data={
  email:email,
  password:password,
 }
    const handleSubmit = async(e) => {
      e.preventDefault();
      const userData = {
      
        email,
        password,
       
        
      };
      console.log(userData);
  
      try {
        const res=await fetch(`${BASE_URL}/auth/login`,{
          method:"POST",
         credentials: "include",
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(userData)
        })
  
          const data=await res.json()
           
  
            if(res.ok)
            {
              console.log("login info succes data ",data,"login info")
              dispatch({
                type:"LOGIN_SUCCESS",
              payload:{
                // user:data.data,
                // token:data.token,
                // role: data.role,

                user: data.user,       // Include the user object here
                token: data.token,     // Include the token here
                role: data.user.role, 
              }
              })
            toast.success(data.msg)
            navigate("/home")

          }
          
          else
          {
            toast.error("not login pls check input ")
            throw new Error(data.msg)
          }
      } catch (err) {
           toast.error(err.msg)
      }  
    };
 
  return (
    <>
     <div className='flex flex-col justify-evenly items-center m-auto shadow-md mt-11 h-[300px] mb-7 max-w-[400px]'>
         <div >
          <p className='font-semibold'>Hello <span className='text-blue-400'>Welcome</span> Back 🎉</p>
         </div>

         <form onSubmit={handleSubmit} className=' flex flex-col mb-6 w-full p-6   gap-5' action="">
         <input className='outline-none border-solid pl-3 border-b' type="email" placeholder='email' name='email' value={email} onChange={(e)=>setemail(e.target.value)} required    />
          <input  className='outline-none border-solid pl-3 border-b' type="password" placeholder='password' name='password' value={password} onChange={(e)=>setpassword(e.target.value)} required    />
         
          
              <button className='bg-blue-600 text-white py-1.5 text-xl rounded-md cursor-pointer text-center mt-3' type='submit' >Login</button>

        
         <p className='text-center'>Don't have account ? <NavLink to="/signup"><span className='text-blue-500'>Signup</span></NavLink></p>
         </form>

     </div>
   
    </>
  )
}
