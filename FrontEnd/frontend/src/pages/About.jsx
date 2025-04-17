import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink } from 'react-router-dom'
export const About = () => {
  return (
    <>
     <div className='flex flex-col md:flex-row   md:justify-between items-center mt-8 md:mt-[-90px] h-screen   gap-7'>
        <div>
          <img className=' w-full sm:w-[400px]' src={assets.about_image} alt="" />
        </div>
        <div className='w-auto md:w-[750px] flex  gap-3 leading-6 tracking-wide flex-col px-5 '>
            <p className='text-justify '> Welcome to <strong>MyDocNow</strong>, your trusted digital partner in health and wellness. We are on a mission to make quality healthcare accessible and hassle-free for everyone. Whether you're searching for a general physician, a specialist, or urgent care services, our platform connects you with verified, experienced doctors across various medical fields.</p>
            <p className='mt-5 hidden md:block'>
            With our seamless appointment booking system, real-time scheduling, and detailed doctor profiles, we empower you to take control of your healthcare with confidence. No more long queues or uncertain availability—just smart, simple, and secure healthcare at your fingertips.
            </p>
            <p className='mt-5 hidden md:block'>Powered by a passionate team of developers, medical experts, and support staff, we blend modern technology with compassionate care to ensure you get the best experience possible. At MyDocNow, your health is our priority—because better care starts with better access.</p>

            <NavLink to="/home" className=" text-white m-auto">
            <button className="w-[200px] px-8 py-4 rounded-xl bg-indigo-400 mt-4 sm:text-lg md:text-xl cursor-pointer transition-all duration-500 hover:scale-105">Lern More</button>
            </NavLink>
        </div>
     </div>
    </>
  )
}
