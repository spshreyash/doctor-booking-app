const User =require("../model/user.js")
const Booking=require("../model/Booking.js")
const Doctor=require("../model/Doctor.js")

async function getAlluser(req,res)
{
    try {
            const user=await User.find({}).select("-password")

            return res.json({success:true,msg:"Users Found",user:user})

        
    } catch (error) {
         console.log(error)
          return res.json({success:false,msg:"Users nto Found"})
        
    }
}

async function getsingleuser(req,res)
{
     try {
         const{id}=req.params
         const singleuser= await User.findById(id).select("-password")

          return res.json({success:true,msg:"user foud",singleuser:singleuser})
        
     } catch (error) {
        return res.json({success:false,msg:"usernot foud",})
     }
}

async function updateuser(req,res)
{
    try {
           const{id}=req.params
           const updatedata=req.body
           const user = await User.findByIdAndUpdate(id, updatedata, { new: true }).select("-password");

           if(!user)
           {
            return res.json({msg:"user not found "})
           }
            return res.json({success:true,msg:"user update done",user:user})
    } catch (error) {
   console.log(error)
        return res.json({success:false,msg:"user not update done"})
        
    }
}

async function deleteUser(req,res)
{
    try {
           const{id}=req.params
          
           const user=await User.findByIdAndDelete(id)

           if(!user)
           {
            return res.json({msg:"user not found "})
           }

           res.clearCookie('token', {
            httpOnly: true,
            secure: true, // Only in production with HTTPS
            sameSite: 'None', // 'Strict' or 'Lax' if not using cross-site cookies
          });
            return res.json({success:true,msg:"user delete  done"})
    } catch (error) {
   console.log(error)
        return res.json({success:false,msg:"user not delete done"})
        
    }
}



async function getUserProfile(req,res)
{
    try {
        // frist find user 
        // console.log(req.user._id)
          const user= await User.findById(req.user._id).select("-password")

        //   console.log(user)

          if(!user)
          {
            return res.json({success:false,msg:"user not found "})
          }

          return res.json({success:true,msg:"user found successfully", user:user})
        
    } catch (error) {
          res.json({success:false,msg:"user not found "})
        
    }
}




async function getAppintment(req, res) {
    try {
      // Find the user's bookings
      const bookings = await Booking.find({ user: req.user._id });
       console.log(bookings," thsi is bookings ")
  
      // If no bookings found, return an appropriate message
      if (!bookings.length) {
        return res.status(404).json({ success: false, msg: "No bookings found for this user" });
      }
  
      // Extract doctor IDs from the bookings
      const doctorIds = bookings.map((b) => b.doctor.id);
  
      // Fetch doctors corresponding to the extracted IDs
      const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select("-password");
  
      // If no doctors found, return an appropriate message
      if (!doctors.length) {
        return res.status(404).json({ success: false, msg: "No doctors found for the appointments" });
      }
  
      // Return both appointments and doctors
      return res.json({
        success: true,
        msg: "Appointments and doctors fetched successfully",
        bookings: bookings,
        doctors: doctors
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, msg: "Error fetching appointments", error: error.message });
    }
  }
  

  async function handleLogout(req,res)
{
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: false, // Change to true in production
            sameSite: "lax"
        });

        res.send(" you are log out ")
        
    } catch (error) {
        console.log(error)
        
    }
}
  

module.exports={
    getAlluser,getsingleuser,updateuser,deleteUser,getUserProfile,getAppintment,handleLogout
}