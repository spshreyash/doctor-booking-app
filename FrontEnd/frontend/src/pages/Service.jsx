import React from 'react'
import {specialityData} from "../assets/assets_frontend/assets.js"
import { assets } from '../assets/assets_frontend/assets.js'
import { Cards } from '../components/Cards.jsx'
import { NavLink } from 'react-router-dom'
console.log(specialityData)
export const Service = () => {
  return (
    <>
    
    <div className='max-w-full  sm:ml-[50px] m-auto flex flex-col items-center  mt-9'>

 
    <div className='w-full m-auto mb-7 text-center'> 
    <h1 className='text-3xl font-bold mb-3'>
        Our Medical  Services
        </h1>
        <p className=' text-center text-sm sm:text-lg break-words sm:break-after-all'>Your health is our priority—compassionate care, trusted expertise, and support every step of the way..</p>
     </div>

    <div >
      <ul className='flex flex-col sm:flex-row  flex-wrap  gap-14  '>

      {specialityData.map((ele, index) => (
            <Cards  key={index} ele={ele} index={index} />
          ))}
      </ul>
    </div>

      
         </div>
         <div className=' h-[500px] flex flex-col sm:flex-row  justify-between items-center mt-[90px] mb-[60px] sm:px-[90px]' >
           <div className='leading-8'>
             <h1 className='font-semibold text-2xl sm:text-4xl'> Get Virtual  Tratment <br /> Anytime .</h1>
           <ol className="list-decimal list-inside mt-5 sm:text-xl leading-9">
            <li >Schedule appointment dirctly </li>
            <li>search your doctor and contact them </li>
            <li>Get digital prescriptions and follow-up care</li>
           </ol>
           <NavLink to="/doctors" ><button className='bg-indigo-300 px-4 py-1.5 mt-2.5 rounded-md cursor-pointer'>Learn More</button></NavLink>
           </div>

           <div className=' rounded-md px-9 sm:px-7 sm:pt-[35px] bg-indigo-400 mt-4'>
            <img className='w-[250px]  sm:w-[400px]' src={assets.appointment_img} alt="" />
           </div>
         </div>
    </>
      

  )
}
