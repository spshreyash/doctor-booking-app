import React from 'react'

import { assets } from '../assets/assets_frontend/assets'
export const Footer = () => {
  return (
    <>
    
    <div className='flex flex-col sm:flex-row  border-b-1  mt-4 p-4 justify-between items-center'>
       <div>
         {/*  letf side  */}
          <div className='  tracking-tight   flex flex-col  mb-3 px-3.5 text-justify' >
            <img className='w-[100px] block m-auto ' src={assets.logo2} alt="" />
            <p className='w-[300px] sm:w-[500px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci omnis vero magnam?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit tempore optio ipsam nam adipisci animi nihil modi. Facere esse ipsa veritatis, dolorum facilis reprehenderit a maxime reiciendis labore? Architecto, reprehenderit.</p>
          </div>
        

       </div>
       <div>
        {/*  center  side  */}
            <div className='   flex flex-col gap-6'>
              <h1 className='font-semibold text-center'>MyDocNow</h1>
              <ul className='text-center flex flex-col gap-3 cursor-pointer leading-5'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
       </div>

       <div className='leading-8 mt-5 text-center'>
        {/*   rigth side  */}
        <h1 className='font-semibold'> Get In Touch</h1>
        <h3>91+ 8767043752</h3>
         <h4 >spshreyash@gamil.com</h4>
       </div>
    </div>
    <div className=' text-center mb-8 mt-3'>
      <p>Copyright © 2024 shreyash - All Right Reserved.</p>
    </div>
    
    </>
  )
}
