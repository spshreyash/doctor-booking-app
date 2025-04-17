import React from 'react'
import { formatDate } from '../utils/formatdate'
export const DoctorAbout = ({name,Experiense,qualificationStartingDate,qualificationEndingDate,qualificationDegree,qualificationUniversity,about}) => {
  return (
    <>
     <div className=''>
        <div className='leading-6 tracking-wide'>
            <h2>About of DR <span className='font-semibold text-2xl'> {name}</span> </h2>

            <p className='mt-3 max-w-[700px] text-justify' >  {about}</p>
             

        </div>
        <div className='mt-4 '>

              <div className=''>

              
                <h3 className='font-semibold'>
                    Education
                    
                </h3>
                <p></p>
                   <div className='mt-1 flex md:flex-row flex-col  md:justify-between md:items-center  md:w-[500px]'>

                    <div className=''>
                    <p className='text-'><span> {formatDate(qualificationStartingDate)}</span> - <span>{formatDate(qualificationEndingDate)}</span></p> 
                    <p>{qualificationDegree}</p>
                    </div>
                  <p>{qualificationUniversity}</p>
                   </div>
                   </div>

                

                   </div>
           
             </div>

             
             
    
    </>
  )
}
