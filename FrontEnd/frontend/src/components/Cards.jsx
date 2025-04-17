// Cards.jsx
import React from 'react';
import arrow from "../assets/right-arrow.png"   
import { NavLink } from 'react-router-dom';
export const Cards = ({ ele,index }) => {
  const { image, speciality,description } = ele;

  return (
     <>
     
    <div className="p-4 border rounded-lg shadow-md flex   flex-col items-center gap-3 transition-all duration-300 ease-linear hover:translate-y-[-10px] ">
      <h3 className="text-lg font-semibold">{speciality}</h3>
      <img src={image} alt={speciality} className="w-24 h-24 object-cover mb-4" />
      <p className='w-[300px]'>{description}</p>
      <div className='flex justify-between w-full items-center'>
      <NavLink to={`/doctors`}onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                 <img className='w-[40px]  border-2 rounded-full p-2  transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:border-indigo-400' src={arrow} alt="" />
                   </NavLink>
      <h1 className='bg-indigo-300 rounded-md px-2.5 py-2'>{index+1} </h1>

      </div>
    </div>
     </>
  );
};
