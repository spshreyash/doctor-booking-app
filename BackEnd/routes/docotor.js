
const express=require("express")
const { getAlluser, getsingleuser, updateuser, deleteUser, getDoctorProfile,handleLogout } = require("../Controller/doctorController")
const Doctorauth = require("../middleware/Doctorauth")
const allowOnly = require("../middleware/allowOnly")

const revieweRouter = require("./reviews.js");
const router=express.Router()


 //nested routes

 router.use("/:id/reviewe",revieweRouter)

router.get("/",getAlluser)
router.get("/:id",getsingleuser)
router.put("/:id",Doctorauth,allowOnly(["Doctor"]),updateuser)
router.delete("/:id",Doctorauth,allowOnly(["Doctor"]),deleteUser)
router.get("/profile/me",Doctorauth,allowOnly(["Doctor"]),getDoctorProfile)
router.post("/logout",Doctorauth,allowOnly(["Doctor"]),handleLogout)




module.exports=router