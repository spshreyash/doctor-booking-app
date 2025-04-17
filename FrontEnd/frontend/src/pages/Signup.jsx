import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import signup from "../assets/signup.png"
import {uploadImageToCloudnery} from "../utils/uplodfile.js"

import {BASE_URL} from "../utils/config.js"
import{toast} from "react-toastify"


export const Signup = () => {
  const [name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('patient');
  const [gender, setGender] = useState('');
  const [photo, setPhoto] = useState(null);
  const navgate=useNavigate()

    const handlePhotoUpload = async(e) => {
      const file=e.target.files[0]
      // console.log(file)

      const data=await uploadImageToCloudnery(file)
      console.log(data,"this data is sinunupfunction ")
      // setPhoto(e.target.files[0]);
      setPhoto(data.secure_url)
    };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
      role,
      gender,
      photo,
    };
    console.log(userData);

    try {
      const res=await fetch(`${BASE_URL}/auth/signup`,{
        method:"POST",
        credentials:"include",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(userData)
      })

        const {msg}=await res.json()
         

        if(res.ok)
        {
          toast.success(msg)
          navgate("/")
        }
        else
        {
          toast.error("Not create the Account ")
          throw new Error(message)
        }
    } catch (err) {
         toast.error(err.msg)
    }  
  };

  return (
    <div className="min-h-screen flex items-center justify-center  md:gap-4  px-6">
      <div className="bg-white shadow-lg rounded-lg flex max-w-4xl w-full overflow-hidden">
        
        {/* Left image section */}
        <div className="w-1/2 bg-blue-600 hidden md:flex items-center justify-center md:gap-4">
          <img src={signup} alt="Add user" className="w-3/4" />
        </div>

        {/* Right form section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-6">Create an <span className="text-blue-600">account</span></h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-b border-gray-300 focus:outline-none py-2"
              value={name}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-b border-gray-300 focus:outline-none py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border-b border-gray-300 focus:outline-none py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="flex space-x-4">
              <div className="flex flex-col w-1/2">
                <label className="text-sm text-gray-500 mb-1">Are you a:</label>
                <select
                  className="border border-gray-300 rounded px-2 py-1"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option>Patient</option>
                  <option>Doctor</option>
                 
                </select>
              </div>

              <div className="flex flex-col w-1/2">
                <label className="text-sm text-gray-500 mb-1">Gender:</label>
                <select
                  className="border border-gray-300 rounded px-2 py-1"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select</option>
                  <option>male</option>
                  <option>female</option>
                  <option>other</option>
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <img
                  src={
                    photo
                      // ?  URL.createObjectURL(photo)  
                      ? photo
                      : 'https://cdn-icons-png.flaticon.com/512/847/847969.png'
                  }
                  alt="Upload"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <input type="file" onChange={handlePhotoUpload} className="hidden" />
                <span className="text-sm text-blue-500">Upload Photo</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700 transition"
            >
              Sign Up
            </button>

            <p className="text-sm text-center mt-2">
              Already have an account? <NavLink to="/" > <span className="text-blue-600 cursor-pointer">Login</span></NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

