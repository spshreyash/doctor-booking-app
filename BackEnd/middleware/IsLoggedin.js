
// const jwt= require("jsonwebtoken")
// const User=require("../model/user.js")

// async function isLoggedIn(req,res,next)
// {
//     const token=req.cookies.token
//     // console.log(token)
//     if(!token)
//     {
//         return res.send({msg:"user is not autherized"})

//     }
//     try {

//         let decode=jwt.verify(token,process.env.JWT_KEY)
//         // console.log(decode)
//         const user=await User.findOne({email:decode.email}).select("-password")
//         req.user=user
//         // console.log(req.user._id)
//         next()
        
//     } catch (error) {
//         return res.send({msg:"server side error"})
        
//     }
// }

// module.exports=isLoggedIn




const jwt = require("jsonwebtoken");
const User = require("../model/user");
const Doctor = require("../model/Doctor");

async function isLoggedIn(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ msg: "Not authorized" });
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_KEY);
        
        // First check in User collection
        let user = await User.findOne({ email: decode.email }).select("-password");

        // If not found, check in Doctor collection
        if (!user) {
            user = await Doctor.findOne({ email: decode.email }).select("-password");
        }

        // If still not found, return error
        if (!user) {
            return res.status(401).json({ msg: "User/Doctor not found" });
        }

        req.user = user; 
        req.userId = user._id;// Attach user or doctor to req
        // console.log(req.user)
        console.log(req.userId," this id form midelware ")
        next();

    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Server error" });
    }
}

module.exports = isLoggedIn;
