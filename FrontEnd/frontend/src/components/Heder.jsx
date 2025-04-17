import React, { useContext, useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets_frontend/assets.js";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AuthContext } from "../Store/AuthContext.jsx";
// import "../App.css"
export const Heder = () => {
  const [showmenu, setmenu] = useState(false);
  const headRef = useRef(null);

  const{user,role,token}=useContext(AuthContext)
  console.log(user,"this user form header ok")
  console.log(role)
  console.log(token," thisis token ")

 
  return (
    <>
      <div
        className="  sticky top-0 z-50  sm:pl-15 sm:pr-5  bg-gradient-to-r from-[#BDE8EE] via-[#FCFCF9]  to-[#FEF2DE]   flex items-center justify-between border-b-2"
        ref={headRef}
      >
        <img className="w-[100px]" src={assets.logo2} alt="" />

        <ul className="hidden sm:flex gap-9">
          <li>
            {" "}
            <NavLink to="/home">Home</NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="/doctors">Find A Doctor </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="/service"> Service</NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="/contact">Contact</NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="/about">About Us</NavLink>{" "}
          </li>
        </ul>
        <div className="flex  items-center gap-3 justify-end ml-[120px] pr-1.5 sm:gap-3">
        {/* {user  && token ? (
          <>
      
         <p > { user ?  user.name : "user"}</p>
         <NavLink to={`${role === "Doctor" ? '/doctor/profile/me' : 'user/profile/me'}`}>

       
         <img
         className="w-[40px]  sm:block  rounded-full"
         src={user.photo}
         alt=""
       />
         </NavLink>
           </>
      ) : (
        <NavLink to="/login">
            <button className="  bg-indigo-400  px-6 py-1.5 sm:px-5  sm:py-3 text-[12px] sm:text-bold  text-white rounded-md">
              Login
            </button>
          </NavLink>
       
      )} */}
      {user && token ? (
  
    <NavLink className='flex items-center gap-3' to={`${role === "Doctor" ? '/doctor/profile/me' : '/user/profile/me'}`}>
  
      
  
    <p>{user.name}</p>
      <img
        className="w-[50px] h-15 bg-indigo-500 rounded-full"
        src={user.photo}
        alt=""
      />
    </NavLink>
  
) : (
  <NavLink to="/">
    <button className="bg-indigo-400 px-6 py-1.5 sm:px-5 sm:py-3 text-[12px] font-bold text-white rounded-md">
      Login
    </button>
  </NavLink>
)}
       
          
          
          <GiHamburgerMenu
            onClick={() => setmenu(true)}
            className="font-extralight sm:hidden"
          />
        </div>
        {/* mobile menu  */}
        <div
          className={`${
            showmenu ? "fixed w-full " : "h-0 w-0"
          } sm:hidden right-0 top-0 z-20 overflow-hidden  bg-white transition-all`}
        >
          <div className=" flex flex-col ">
            <div className="flex justify-between items-center p-4">
              <img className="w-[100px]" src={assets.logo2} alt="" />
              <img
                onClick={() => setmenu(false)}
                className="w-[20px] h-[20px]"
                src={assets.cross_icon}
                alt=""
              />
            </div>
            <ul className=" flex flex-col items-center gap-8 cursor-pointer font-semibold">
              <NavLink
                onClick={() => setmenu(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-500 font-bold border-b-2 border-indigo-500 px-4 py-2"
                    : "px-4 py-2 text-gray-700"
                }
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => setmenu(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-500 font-bold border-b-2 border-indigo-500 px-4 py-2"
                    : "px-4 py-2 text-gray-700"
                }
                to="/doctors"
              >
                Find A Doctor
              </NavLink>
              <NavLink
                onClick={() => setmenu(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-500 font-bold border-b-2 border-indigo-500 px-4 py-2"
                    : "px-4 py-2 text-gray-700"
                }
                to="/service"
              >
                Service
              </NavLink>
              <NavLink
                onClick={() => setmenu(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-500 font-bold border-b-2 border-indigo-500 px-4 py-2"
                    : "px-4 py-2 text-gray-700"
                }
                to="/contact"
              >
                Contact
              </NavLink>
              <NavLink
                onClick={() => setmenu(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-500 font-bold border-b-2 border-indigo-500 px-4 py-2 mb-8"
                    : "px-4 py-2 text-gray-700"
                }
                to="/about"
              >
                About
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
