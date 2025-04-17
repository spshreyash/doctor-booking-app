// const Doctor = require("../model/Doctor");
// const User = require("../model/user");

// const allowOnly=roles=> async (req,res,next)=>
// {
//     const userid=req.userId
//     console.log(userid," this id also ")

//     let user;
//     const patient=await User.findById(userid)
//     const docotr=await Doctor.findById(userid) 
    
//     if(patient)
//         {
//             user=patient
//                 console.log(user,"this is user is form the allow only patient")

//         }
//         if(docotr)
//             {
//                 user=docotr
//                 console.log(user,"this is user is form the allow only docot")
//             }

//     if(!roles.includes(user.role))
//     {
//         return res.status(401)  .json({ success: false, message: "You're not authorized" });
//     }
//     next();
// }

// module.exports=allowOnly


// const allowOnly = (roles) => async (req, res, next) => {
//     const user = req.user; 
//     // already set in isLoggedIn
//     console.log(req.user) 

//     // Check if user exists and has a role
//     if (!user || !user.role) {
//         return res.status(401).json({ success: false, message: "No user or role found" });
//     }

//     // Check if user.role is allowed
//     if (!roles.includes(user.role)) {
//         return res.status(401).json({ success: false, message: "You're not authorized" });
//     }

     
//     // Role is valid
//     next();
// };

// module.exports=allowOnly


const Doctor = require("../model/Doctor");
const User = require("../model/user");

const allowOnly = (roles) => async (req, res, next) => {
  const userId = req.userId;

  if (!userId) {
    return res.status(401).json({ success: false, msg: "User ID not found in request" });
  }

  let user = await User.findById(userId); // Try finding user first

  if (!user) {
    user = await Doctor.findById(userId); // If not found, try finding doctor
  }

  if (!user || !user.role) {
    return res.status(401).json({ success: false, msg: "No valid user or role found" });
  }

  console.log("Authenticated user:", user.name, "| Role:", user.role);

  if (!roles.includes(user.role)) {
    return res.status(403).json({ success: false, msg: "You're not authorized to access this resource" });
  }

  req.user = user; // Optional: you can attach the full user object to the request
  next();
};

module.exports = allowOnly;
