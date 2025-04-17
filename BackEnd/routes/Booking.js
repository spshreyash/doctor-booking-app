const express=require("express")
const Doctorauth = require("../middleware/Doctorauth")
const allowOnly = require("../middleware/allowOnly")
const isLoggedIn =require("../middleware/IsLoggedin")
const { getCheckoutSession, getDoctorBookings } = require("../Controller/BookingController")
const router=express.Router()

router.post("/checkout-session/:id",isLoggedIn,getCheckoutSession)
router.get("/doctor", isLoggedIn, getDoctorBookings);

module.exports=router