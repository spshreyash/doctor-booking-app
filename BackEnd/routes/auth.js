const express=require("express")
const { Signup, Login } = require("../Controller/authcontroller")
const Userisloggedin = require("../middleware/IsLoggedin")
const Doctorauth = require("../middleware/Doctorauth")
const router=express.Router()

router.post("/signup",Signup)
router.post("/login",Login)

module.exports=router