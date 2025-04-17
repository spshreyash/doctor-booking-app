


import React, { useEffect, useState } from 'react';
import { uploadImageToCloudnery } from '../utils/uplodfile';
import { toast } from 'react-toastify';
import { BASE_URL } from '../utils/config';

export const ProfileSetting = ({data}) => {
    const [name, setFullName] = useState('');
    const [email, setEmail] = useState('');

    const [bloodType, setbload] = useState('');  // Set default to an empty string
    const [gender, setGender] = useState('');
    const [photo, setPhoto] = useState('');


//   console.log(data,"this user is setting user ") 
 useEffect(()=>{
    if (data) {
        setFullName(data.name || '');
        setEmail(data.email || '');    
        setPhoto(data.photo || '');   
        setbload(data.bloodType || ''); 
        setGender(data.gender || ''); 
      }
 },[data])

     const handlePhotoUpload = async(e) => {
        const file=e.target.files[0]
        // console.log(file)
  
        const data=await uploadImageToCloudnery(file)
        console.log(data,"this data is sinunupfunction ")
        // setPhoto(e.target.files[0]);
        setPhoto(data.secure_url)
      };

        // /appointments/my-appointments
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
     
      bloodType,
      gender,
      photo,
    };

    console.log(userData); // Just logging data for now

    try {
         const res=await fetch(`${BASE_URL}/user/${data._id}`,{
           method:"put",
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
             navgate("/user/profile/me")
           }
           else
           {
             throw new Error(message)
           }
       } catch (error) {
            toast.error(error.msg)
       }

  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="bg-white shadow-lg rounded-lg flex max-w-4xl w-full overflow-hidden">

        {/* Right form section */}
        <div className="w-full p-8">
          <h2 className="text-2xl font-semibold mb-6">
            Create an <span className="text-blue-600">account</span>
          </h2>

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
          

            <div className="flex space-x-4">
              <div className="flex flex-col w-1/2">
                
              <input
              type="text"
              placeholder=" bloodType"
              className="w-full border-b border-gray-300 focus:outline-none py-2"
              value={bloodType}
              onChange={(e) => setbload(e.target.value)}
              required
            />
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
                <span className="text-sm text-blue-500">Update profile  Photo</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700 transition"
            >
              update the profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
