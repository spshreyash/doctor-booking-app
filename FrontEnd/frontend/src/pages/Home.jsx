import React, { useContext } from 'react'
import {assets} from "../assets/assets_frontend/assets.js"
import doctorsfind from "../assets/finddoctoe.jpg"
import calender from "../assets/calender.jpg"
import search from "../assets/search.jpg"
import { FaArrowRightLong } from "react-icons/fa6";
import arrow from "../assets/right-arrow.png"
import { About } from './About.jsx'
import { NavLink } from 'react-router-dom'
import { Appcontext } from '../Store/Appcontext.jsx'
import { TopDoctors } from '../components/TopDoctors.jsx'
import { Faq } from '../components/Faq.jsx'

export const Home = () => {

  const{doctors}=useContext(Appcontext)
  console.log(doctors)
  return (
     <>
        <div className=' mt-10 min-h-[540px] flex flex-col md:flex-row flex-wrap  bg-primary rounded-lg px-6 md:px-15'>
            {/* left side  */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-8 p-4 m-auto'>
           <p className='text-3xl md:text-4xl lg:text-5xl mt-11  text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Book Appointment <br />  With Trusted Doctors</p>
           <div className='flex  flex-col md:flex-row font-semibold  items-center  gap-4 text-white'>
             <img src={assets.group_profiles}alt="group_profiles" />
              <p>Simply browse through our extensive list of trusted doctors,<br className='hidden md:block' />
              schedule your appointment hassle-free.</p>

             
           </div>

           <a className='flex gap-3 bg-slate-200 p-3.5 rounded-full px-4 font-medium  hover:scale-105 transition-all duration-200'  href="#speciality">
            Book Appoinntment <img src={assets.arrow_icon}alt="" />  
            {/*  for scrolling purpose we add #speciality this is work as id  */}
           </a>
        
         
            </div>
            {/*  rigth  side  */} 
            <div className=' md:w-1/2 relative'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
            </div>

        </div>

        {/* this section2  */}
        <div id="speciality"   className=' flex flex-col items-center mt-11.5 '>
          <div className=' text-center mb-5'>
             <h2 className='font-semibold text-4xl'>Providing the best <br /> medical service</h2>
             <p className='mt-6 '>Our world-class care for evryone.</p>
             <p>our health Sysytam offer expert healthcare</p>
            
          </div>

          <div className='mt-10 mb-20 flex flex-col sm:flex-row items-center gap-7 justify-between'>
             

              <div className='flex flex-col items-center gap-3 leading-6 transition-transform duration-500 ease-out hover:-translate-y-[10px]  '>
                 <img className='w-[300px] ' src={doctorsfind} alt="" />
                 <p className='font-semibold'>Find A Doctor</p>
                 <p className='px-7 text-center'>Our world-class care for evryone.
                 our health Sysytam offer expert healthcare</p>
                 <NavLink to="/doctors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>

                 <img className='w-[40px]  border-2 rounded-full p-2  transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:border-indigo-400' src={arrow} alt="" />
                 </NavLink>
              </div>
              
             

            
              <div className='flex flex-col items-center gap-3 leading-6 transition-transform duration-500 ease-out hover:-translate-y-[10px]  '>
             
                 <img  className='w-[300px] 'src={search} alt="" />
                 <p className='font-semibold'>Find A Location</p>
                 <p className='px-7 text-center'>Our world-class care for evryone.
                 our health Sysytam offer expert healthcare</p>
                 <img className='w-[40px]  border-2 rounded-full p-2  transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:border-indigo-400' src={arrow} alt="" />

              </div>
            
             
              <div className='flex flex-col items-center gap-3 leading-6 transition-transform duration-500 ease-out hover:-translate-y-[10px]  '>

                 <img className='w-[290px] h-[200px] ' src={calender} alt="" />
                 <p className='font-semibold'>Book Appointment</p>
                 <p className='px-7 text-center'>Our world-class care for evryone.
                 our health Sysytam offer expert healthcare</p>
                 <NavLink to={`/doctors`}onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                 <img className='w-[40px]  border-2 rounded-full p-2  transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:border-indigo-400' src={arrow} alt="" />
                   </NavLink>
         
             </div>
          </div>
        </div>
        <div>
         
        </div>

        <div>
         <TopDoctors/>
        </div>
        <div>
         <Faq/>
        </div>
     </>
  )
}
