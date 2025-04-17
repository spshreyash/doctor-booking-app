import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export const FaqAccordian = ({ faqele }) => {
  const { question, answer } = faqele;
  const [isopen, setispoen] = useState(false);

  const toggleAccordian = () => {
    setispoen(!isopen);
  };

  return (
    <>
      <div className=" min-w-2.5 max-w-[550px] p-3 md:p-5 rounded-md border border-black mb-5 cursor-pointer ">
        <div className="flex flex-row gap-5 justify-between items-center sm:w-[400px] rounded-md" onClick={toggleAccordian}>
          <h4 className="text-[16px] text-black">{question}</h4>
          <div className={`${isopen && "bg-indigo-200 text-white"} w-7 h-7 border border-black flex items-center justify-center rounded-md`}>
            {isopen ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
        </div>

        {/* Transition only */}
        <div className={`transition-all duration-500 overflow-hidden ${isopen ? 'max-h-40 mt-2' : 'max-h-0'}`}>
          <p className="text-sm">
            {answer}
          </p>
        </div>
      </div>
    </>
  );
};
