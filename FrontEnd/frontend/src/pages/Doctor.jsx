import React, { useContext, useState } from "react";
import { DoctorAllList } from "../components/DoctorAllList";
import { Appcontext } from "../Store/Appcontext";

export const Doctor = () => {
  const { query, setquery } = useContext(Appcontext);
  const handleSearch=()=>
  {
    setquery(query.trim())

      console.log(query)
  }
  return (
    <>
      
        <div className=" text-center mt-10">

          <h1 className="font-semibold text-2xl mb-3"> Find A Doctors </h1>
          <div className=" max-w-[300px]  sm:max-w-[400px] flex items-center justify-between  m-auto bg-[#D3DAE9] rounded-md 
              ">
            <input
              className="py-2 w-[330px]  pl-4  pr-2   bg-transparent  focus:outline-none  placeholder:text-slate-600  text-slate-600 cursor-pointer "
              type="search"
              placeholder="search doctor with name  "
              value={query}
              onChange={(e)=>setquery(e.target.value)}
            />

            <div>
              <button onClick={handleSearch} className="bg-[#1C5AF9] text-white cursor-pointer py-2 px-3 rounded-r-md">Search</button>
            </div>
          </div>
        </div>
         
         <div className="mt-15">
          <DoctorAllList query={query}/>
         </div>
      
    </>
  );
};
