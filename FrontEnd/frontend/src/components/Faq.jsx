import React from 'react'
  import {faqData} from "../assets/assets_frontend/assets.js"
  import  faqimg from "../assets/faq.jpg"
import { FaqAccordian } from './FaqAccordian.jsx'
export const Faq = () => {
  return (
    <>
     <div className='w-full h-auto  mt-[40px] mb-[0px] flex sm:flex-row flex-col justify-evenly gap-6 items-center '>
        <div>
              <div className='text-center font-semibold text-2xl'>
                  <h2>Faq Questions ? </h2>
              </div>
            <img className='w-full px-2 py-2.5 sm:w-[400px]' src={faqimg} alt="" />
        </div>
        <div>
          <ul className='flex flex-col  gap-5 sm:gap-11'>
            {
                faqData.map((faqele,index)=>
                {
                    return <li key={index}> <FaqAccordian faqele={faqele} index={index} /> </li>
                })
            }
          </ul>
        </div>
     </div>
    </>
  )
}
