
const express=require("express")
const { getAlluser, getsingleuser, updateuser, deleteUser, getUserProfile, getAppintment ,handleLogout} = require("../Controller/userController")
// const Userisloggedin = require("../middleware/IsLoggedin")
const allowOnly = require("../middleware/allowOnly")
const isLoggedIn = require("../middleware/IsLoggedin")

const router=express.Router()

router.get("/",isLoggedIn,allowOnly(["patient"]),getAlluser)
router.get("/:id",isLoggedIn,allowOnly(["Doctor"]) ,getsingleuser)
router.put("/:id",isLoggedIn,allowOnly(["patient"]),updateuser)
router.delete("/:id",isLoggedIn,allowOnly(["patient"]),deleteUser)
router.get("/profile/me",isLoggedIn,allowOnly(["patient"]),getUserProfile)
router.get("/appointments/my-appointments",isLoggedIn,allowOnly(["patient"]),getAppintment)
router.post("/logout",isLoggedIn,allowOnly(["patient"]),handleLogout)





module.exports=router