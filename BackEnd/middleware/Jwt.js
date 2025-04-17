const jwt = require("jsonwebtoken");

const  genrateToken=(user)=>
{
  if (!user || !user.email || !user._id || !user.role) {
    throw new Error("Invalid user object passed to generateToken");
  }

  if (!user) {
    return res.status(500).json({ msg: "User creation failed" });
  }

      console.log(user)
    return  jwt.sign({email:user.email , id:user._id,role:user.role},process.env.JWT_KEY)
}

module.exports=genrateToken