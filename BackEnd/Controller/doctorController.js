const Doctor =require("../model/Doctor.js")

async function getAlluser(req,res)
{
    try {
        const{query}=req.query
        let doctor;
        if(query)
        {
            doctor =await Doctor.find({
                isApproved: "Approvel" ,
                $or:[
                    {name:{$regex : query , $options: "i"}},
                    { specialization : {$regex : query , $options: "i"}},
                ],
            }).select("-password").populate({
                path: "Reviews",  // Populate Reviews
                select: "reviewText rating user",  // Select fields you want from Review
                populate: {
                  path: "user",  // Populate the user field inside each Review
                  select: "name email",  // Select fields from User model
                },
              })

              console.log("this is the docotot data wherer we populate ",doctor)
        }else
        {
            
            doctor=await Doctor.find({}).select("-password").populate("Reviews")
              console.log("this is the docotot data wherer we populate ",doctor)
        }

            return res.json({success:true,msg:"Users Found",doctor:doctor})

        
    } catch (error) {
         console.log(error)
         console.log("Error populating Review:", error);
          return res.json({success:false,msg:"Users nto Found"})
        
    }
} 

async function getsingleuser(req,res)
{
     try {
         const{id}=req.params
         const doctorWithReviews = await Doctor.findById(id)
    .select("-password")
    .populate("Reviews")


          return res.json({success:true,msg:"user foud",doctorWithReviews:doctorWithReviews})
        
     } catch (error) {
        return res.json({success:false,msg:"usernot foud",})
     }
}




//  herer we update password also 
async function updateuser(req,res)
{
    try {
           const{id}=req.params
           const updatedata=req.body
           if (updatedata.password) {
            const salt = await bcrypt.genSalt(10);
            updatedata.password = await bcrypt.hash(updatedata.password, salt);
          }

           const doctor = await Doctor.findByIdAndUpdate(id, updatedata, { new: true });

         

           if(!doctor)
           {
            return res.json({msg:"user not found "})
           }
            return res.json({success:true,msg:"user update done",doctor:doctor})
    } catch (error) {
   console.log(error)
        return res.json({success:false,msg:"user not update done"})
        
    }
}

async function deleteUser(req,res)
{
    try {
           const{id}=req.params
          
           const doctor=await Doctor.findByIdAndDelete(id)

           if(!doctor)
           {
            return res.json({msg:"user not found "})
           }
            return res.json({success:true,msg:"user delete  done",doctor:doctor})
    } catch (error) {
   console.log(error)
        return res.json({success:false,msg:"user not delete done"})
        
    }
}


async function getDoctorProfile(req,res)
{
    try {
        // frist find user 
        //   console.log(req.user)
          const doctor= await Doctor.findById(req.user._id).select("-password")

          console.log(doctor ," this is profle data ")

          if(!doctor)
          {
            return res.json({success:false,msg:"user not found "})
          }

          return res.json({success:true,msg:"user found successfully", doctor:doctor})
        
    } catch (error) {
          res.json({success:false,msg:"user not found "})
        
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
    getAlluser,getsingleuser,updateuser,deleteUser,getDoctorProfile,handleLogout
}