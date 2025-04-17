import React, { useContext, useEffect, useState } from "react";
import{BASE_URL} from "../utils/config"
import { AuthContext } from "../Store/AuthContext";
import { toast } from "react-toastify";
export const DoctroFullProfile = ({doctordata, dataid}) => {
  const{token}=useContext(AuthContext)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    gender: "",
    specialization: "",
    ticketPrice: 0,
    experience: [],
    qualificationStartingDate: "",
    qualificationEndingDate: "",
    qualificationDegree: "",
    qualificationUniversity: "",
    
    // timeslots: [{day:"",startTime:"",endTime:""}],  
    timeslots: [],  
    about:""

  });

   useEffect(()=>
  {
    setFormData({

      
      name: doctordata.name,
      email: doctordata.email,
      phone: doctordata.phone,
      bio: doctordata.bio,
      gender: doctordata.gender,
      specialization: doctordata.specialization,
      ticketPrice: doctordata.ticketPrice,
      experience: [],
      qualificationStartingDate: doctordata.qualificationStartingDate,
      qualificationEndingDate: doctordata.qualificationEndingDate,
      qualificationDegree: doctordata.qualificationDegree,
      qualificationUniversity: doctordata.qualificationUniversity,
      about:doctordata.about,
      // timeslots: [{day:"",startTime:"",endTime:""}],  
      timeslots:doctordata.timeslots,  
    })
  },[doctordata])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addTimeSlot = () => {
    const { day, startTime, endTime } = formData;
    if (day && startTime && endTime) {
      const newSlot = { day, startTime, endTime };
      setFormData({
        ...formData,
        timeslots: [...formData.timeslots, newSlot],
        day: "",
        startTime: "",
        endTime: "",
      });
    } else {
      alert("Please fill all time slot fields.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    try {
         const res=await fetch(`${BASE_URL}/doctor/${dataid}`,{
          method:"put",
          credentials:"include",
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(formData)
         
         })

          console.log(res,"this is res ")
          if(res.ok)
          {
             const result=await res.json()
             console.log(result, " this is the result in DoctorProfile")
             toast.success(result.msg)
          }
    } catch (err) {
       toast.error(err.msg) 
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-start py-10">
      <div className="w-full max-w-4xl bg-white p-10 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-8">Profile Information</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div>
            <label className="block mb-1 font-medium">Name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone*</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Bio*</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-1 font-medium">Gender*</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
                required
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">Specialization*</label>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
                required
              >
                <option value="">Select</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Neurologist">Neurologist</option>
                <option value="GeneralPhysician">General Physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
                <option value="Pediatricians">Pediatricians</option>

                


                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">Ticket Price*</label>
              <input
                type="number"
                name="ticketPrice"
                value={formData.ticketPrice}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
                required
              />
            </div>
          </div>

          {/* Time Slot Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Add Time Slots</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block mb-1 font-medium">Day</label>
                <select
                  name="day"
                  value={formData.day}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                >
                  <option value="">Select Day</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">Start Time</label>
                <input
                  type="time"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">End Time</label>
                <input
                  type="time"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={addTimeSlot}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Add Time Slot
            </button>

            {formData.timeslots.length > 0 && (
              <ul className="mt-4 list-disc pl-5">
                {formData.timeslots.map((slot, index) => (
                  <li key={index}>
                    {slot.day}: {slot.startTime} - {slot.endTime}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">About*</label>
            <textarea
              className="w-full border rounded-md p-2"
              name="about"
              value={formData.about}
              onChange={handleChange}
              placeholder="about"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
  <div>
    <label className="block mb-1 font-medium">Qualification Degree*</label>
    <input
      type="text"
      name="qualificationDegree"
      value={formData.qualificationDegree}
      onChange={handleChange}
      className="w-full border rounded-md p-2"
      required
    />
  </div>

  <div>
    <label className="block mb-1 font-medium">University*</label>
    <input
      type="text"
      name="qualificationUniversity"
      value={formData.qualificationUniversity}
      onChange={handleChange}
      className="w-full border rounded-md p-2"
      required
    />
  </div>

  <div>
    <label className="block mb-1 font-medium">Start Date*</label>
    <input
      type="date"
      name="qualificationStartingDate"
      value={formData.qualificationStartingDate}
      onChange={handleChange}
      className="w-full border rounded-md p-2"
      required
    />
  </div>

  <div>
    <label className="block mb-1 font-medium">End Date*</label>
    <input
      type="date"
      name="qualificationEndingDate"
      value={formData.qualificationEndingDate}
      onChange={handleChange}
      className="w-full border rounded-md p-2"
      required
    />
  </div>
</div>


          <button
            type="submit"
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};
